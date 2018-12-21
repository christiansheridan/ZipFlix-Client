import { element, by, ElementFinder } from 'protractor';

export class GenreComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-genre div table .btn-danger'));
    title = element.all(by.css('jhi-genre div h2#page-heading span')).first();

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

export class GenreUpdatePage {
    pageTitle = element(by.id('jhi-genre-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    genreInput = element(by.id('field_genre'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setGenreInput(genre) {
        await this.genreInput.sendKeys(genre);
    }

    async getGenreInput() {
        return this.genreInput.getAttribute('value');
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

export class GenreDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-genre-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-genre'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
