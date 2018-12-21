/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SearchComponentsPage, SearchDeleteDialog, SearchUpdatePage } from './search.page-object';

const expect = chai.expect;

describe('Search e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let searchUpdatePage: SearchUpdatePage;
    let searchComponentsPage: SearchComponentsPage;
    let searchDeleteDialog: SearchDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Searches', async () => {
        await navBarPage.goToEntity('search');
        searchComponentsPage = new SearchComponentsPage();
        expect(await searchComponentsPage.getTitle()).to.eq('sampleappApp.search.home.title');
    });

    it('should load create Search page', async () => {
        await searchComponentsPage.clickOnCreateButton();
        searchUpdatePage = new SearchUpdatePage();
        expect(await searchUpdatePage.getPageTitle()).to.eq('sampleappApp.search.home.createOrEditLabel');
        await searchUpdatePage.cancel();
    });

    it('should create and save Searches', async () => {
        const nbButtonsBeforeCreate = await searchComponentsPage.countDeleteButtons();

        await searchComponentsPage.clickOnCreateButton();
        await promise.all([searchUpdatePage.setSearchQueryInput('searchQuery')]);
        expect(await searchUpdatePage.getSearchQueryInput()).to.eq('searchQuery');
        await searchUpdatePage.save();
        expect(await searchUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await searchComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Search', async () => {
        const nbButtonsBeforeDelete = await searchComponentsPage.countDeleteButtons();
        await searchComponentsPage.clickOnLastDeleteButton();

        searchDeleteDialog = new SearchDeleteDialog();
        expect(await searchDeleteDialog.getDialogTitle()).to.eq('sampleappApp.search.delete.question');
        await searchDeleteDialog.clickOnConfirmButton();

        expect(await searchComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
