/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    RecommendedVideosComponentsPage,
    RecommendedVideosDeleteDialog,
    RecommendedVideosUpdatePage
} from './recommended-videos.page-object';

const expect = chai.expect;

describe('RecommendedVideos e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let recommendedVideosUpdatePage: RecommendedVideosUpdatePage;
    let recommendedVideosComponentsPage: RecommendedVideosComponentsPage;
    let recommendedVideosDeleteDialog: RecommendedVideosDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load RecommendedVideos', async () => {
        await navBarPage.goToEntity('recommended-videos');
        recommendedVideosComponentsPage = new RecommendedVideosComponentsPage();
        expect(await recommendedVideosComponentsPage.getTitle()).to.eq('sampleappApp.recommendedVideos.home.title');
    });

    it('should load create RecommendedVideos page', async () => {
        await recommendedVideosComponentsPage.clickOnCreateButton();
        recommendedVideosUpdatePage = new RecommendedVideosUpdatePage();
        expect(await recommendedVideosUpdatePage.getPageTitle()).to.eq('sampleappApp.recommendedVideos.home.createOrEditLabel');
        await recommendedVideosUpdatePage.cancel();
    });

    it('should create and save RecommendedVideos', async () => {
        const nbButtonsBeforeCreate = await recommendedVideosComponentsPage.countDeleteButtons();

        await recommendedVideosComponentsPage.clickOnCreateButton();
        await promise.all([]);
        await recommendedVideosUpdatePage.save();
        expect(await recommendedVideosUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await recommendedVideosComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last RecommendedVideos', async () => {
        const nbButtonsBeforeDelete = await recommendedVideosComponentsPage.countDeleteButtons();
        await recommendedVideosComponentsPage.clickOnLastDeleteButton();

        recommendedVideosDeleteDialog = new RecommendedVideosDeleteDialog();
        expect(await recommendedVideosDeleteDialog.getDialogTitle()).to.eq('sampleappApp.recommendedVideos.delete.question');
        await recommendedVideosDeleteDialog.clickOnConfirmButton();

        expect(await recommendedVideosComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
