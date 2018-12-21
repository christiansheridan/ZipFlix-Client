import { element, by, ElementFinder } from 'protractor';

export class RatingComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-rating div table .btn-danger'));
    title = element.all(by.css('jhi-rating div h2#page-heading span')).first();

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

export class RatingUpdatePage {
    pageTitle = element(by.id('jhi-rating-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    ratingInput = element(by.id('field_rating'));
    videoSelect = element(by.id('field_video'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setRatingInput(rating) {
        await this.ratingInput.sendKeys(rating);
    }

    async getRatingInput() {
        return this.ratingInput.getAttribute('value');
    }

    async videoSelectLastOption() {
        await this.videoSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async videoSelectOption(option) {
        await this.videoSelect.sendKeys(option);
    }

    getVideoSelect(): ElementFinder {
        return this.videoSelect;
    }

    async getVideoSelectedOption() {
        return this.videoSelect.element(by.css('option:checked')).getText();
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

export class RatingDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-rating-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-rating'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
