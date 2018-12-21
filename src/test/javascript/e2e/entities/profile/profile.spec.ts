/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProfileComponentsPage, ProfileDeleteDialog, ProfileUpdatePage } from './profile.page-object';

const expect = chai.expect;

describe('Profile e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let profileUpdatePage: ProfileUpdatePage;
    let profileComponentsPage: ProfileComponentsPage;
    let profileDeleteDialog: ProfileDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Profiles', async () => {
        await navBarPage.goToEntity('profile');
        profileComponentsPage = new ProfileComponentsPage();
        expect(await profileComponentsPage.getTitle()).to.eq('sampleappApp.profile.home.title');
    });

    it('should load create Profile page', async () => {
        await profileComponentsPage.clickOnCreateButton();
        profileUpdatePage = new ProfileUpdatePage();
        expect(await profileUpdatePage.getPageTitle()).to.eq('sampleappApp.profile.home.createOrEditLabel');
        await profileUpdatePage.cancel();
    });

    it('should create and save Profiles', async () => {
        const nbButtonsBeforeCreate = await profileComponentsPage.countDeleteButtons();

        await profileComponentsPage.clickOnCreateButton();
        await promise.all([
            profileUpdatePage.setNameInput('name'),
            profileUpdatePage.setDateOfBirthInput('2000-12-31'),
            profileUpdatePage.setImageURLInput('imageURL'),
            profileUpdatePage.zipFlixUserSelectLastOption()
        ]);
        expect(await profileUpdatePage.getNameInput()).to.eq('name');
        expect(await profileUpdatePage.getDateOfBirthInput()).to.eq('2000-12-31');
        expect(await profileUpdatePage.getImageURLInput()).to.eq('imageURL');
        await profileUpdatePage.save();
        expect(await profileUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await profileComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Profile', async () => {
        const nbButtonsBeforeDelete = await profileComponentsPage.countDeleteButtons();
        await profileComponentsPage.clickOnLastDeleteButton();

        profileDeleteDialog = new ProfileDeleteDialog();
        expect(await profileDeleteDialog.getDialogTitle()).to.eq('sampleappApp.profile.delete.question');
        await profileDeleteDialog.clickOnConfirmButton();

        expect(await profileComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
