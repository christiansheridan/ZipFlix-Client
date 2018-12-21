import { element, by, ElementFinder } from 'protractor';

export class VideoComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-video div table .btn-danger'));
    title = element.all(by.css('jhi-video div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class VideoUpdatePage {
    pageTitle = element(by.id('jhi-video-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    videoNameInput = element(by.id('field_videoName'));
    urlInput = element(by.id('field_url'));
    imageURLInput = element(by.id('field_imageURL'));
    avgRatingInput = element(by.id('field_avgRating'));
    genresSelect = element(by.id('field_genres'));
    recommendedVideosSelect = element(by.id('field_recommendedVideos'));
    searchSelect = element(by.id('field_search'));
    searchResultSelect = element(by.id('field_searchResult'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setVideoNameInput(videoName) {
        await this.videoNameInput.sendKeys(videoName);
    }

    async getVideoNameInput() {
        return this.videoNameInput.getAttribute('value');
    }

    async setUrlInput(url) {
        await this.urlInput.sendKeys(url);
    }

    async getUrlInput() {
        return this.urlInput.getAttribute('value');
    }

    async setImageURLInput(imageURL) {
        await this.imageURLInput.sendKeys(imageURL);
    }

    async getImageURLInput() {
        return this.imageURLInput.getAttribute('value');
    }

    async setAvgRatingInput(avgRating) {
        await this.avgRatingInput.sendKeys(avgRating);
    }

    async getAvgRatingInput() {
        return this.avgRatingInput.getAttribute('value');
    }

    async genresSelectLastOption() {
        await this.genresSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async genresSelectOption(option) {
        await this.genresSelect.sendKeys(option);
    }

    getGenresSelect(): ElementFinder {
        return this.genresSelect;
    }

    async getGenresSelectedOption() {
        return this.genresSelect.element(by.css('option:checked')).getText();
    }

    async recommendedVideosSelectLastOption() {
        await this.recommendedVideosSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async recommendedVideosSelectOption(option) {
        await this.recommendedVideosSelect.sendKeys(option);
    }

    getRecommendedVideosSelect(): ElementFinder {
        return this.recommendedVideosSelect;
    }

    async getRecommendedVideosSelectedOption() {
        return this.recommendedVideosSelect.element(by.css('option:checked')).getText();
    }

    async searchSelectLastOption() {
        await this.searchSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async searchSelectOption(option) {
        await this.searchSelect.sendKeys(option);
    }

    getSearchSelect(): ElementFinder {
        return this.searchSelect;
    }

    async getSearchSelectedOption() {
        return this.searchSelect.element(by.css('option:checked')).getText();
    }

    async searchResultSelectLastOption() {
        await this.searchResultSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async searchResultSelectOption(option) {
        await this.searchResultSelect.sendKeys(option);
    }

    getSearchResultSelect(): ElementFinder {
        return this.searchResultSelect;
    }

    async getSearchResultSelectedOption() {
        return this.searchResultSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class VideoDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-video-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-video'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
