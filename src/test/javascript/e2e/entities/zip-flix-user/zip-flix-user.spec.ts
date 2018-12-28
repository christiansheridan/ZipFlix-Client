/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ZipFlixUserComponentsPage, ZipFlixUserDeleteDialog, ZipFlixUserUpdatePage } from './zip-flix-user.page-object';

const expect = chai.expect;

describe('ZipFlixUser e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let zipFlixUserUpdatePage: ZipFlixUserUpdatePage;
    let zipFlixUserComponentsPage: ZipFlixUserComponentsPage;
    let zipFlixUserDeleteDialog: ZipFlixUserDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ZipFlixUsers', async () => {
        await navBarPage.goToEntity('zip-flix-user');
        zipFlixUserComponentsPage = new ZipFlixUserComponentsPage();
        expect(await zipFlixUserComponentsPage.getTitle()).to.eq('sampleappApp.zipFlixUser.home.title');
    });

    it('should load create ZipFlixUser page', async () => {
        await zipFlixUserComponentsPage.clickOnCreateButton();
        zipFlixUserUpdatePage = new ZipFlixUserUpdatePage();
        expect(await zipFlixUserUpdatePage.getPageTitle()).to.eq('sampleappApp.zipFlixUser.home.createOrEditLabel');
        await zipFlixUserUpdatePage.cancel();
    });

    it('should create and save ZipFlixUsers', async () => {
        const nbButtonsBeforeCreate = await zipFlixUserComponentsPage.countDeleteButtons();

        await zipFlixUserComponentsPage.clickOnCreateButton();
        await promise.all([zipFlixUserUpdatePage.setDateOfBirthInput('2000-12-31')]);
        expect(await zipFlixUserUpdatePage.getDateOfBirthInput()).to.eq('2000-12-31');
        await zipFlixUserUpdatePage.save();
        expect(await zipFlixUserUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await zipFlixUserComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ZipFlixUser', async () => {
        const nbButtonsBeforeDelete = await zipFlixUserComponentsPage.countDeleteButtons();
        await zipFlixUserComponentsPage.clickOnLastDeleteButton();

        zipFlixUserDeleteDialog = new ZipFlixUserDeleteDialog();
        expect(await zipFlixUserDeleteDialog.getDialogTitle()).to.eq('sampleappApp.zipFlixUser.delete.question');
        await zipFlixUserDeleteDialog.clickOnConfirmButton();

        expect(await zipFlixUserComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
