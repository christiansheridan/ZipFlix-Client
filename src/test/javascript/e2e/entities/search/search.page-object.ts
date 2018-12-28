import { element, by, ElementFinder } from 'protractor';

export class SearchComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-search div table .btn-danger'));
    title = element.all(by.css('jhi-search div h2#page-heading span')).first();

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

export class SearchUpdatePage {
    pageTitle = element(by.id('jhi-search-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    searchQueryInput = element(by.id('field_searchQuery'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setSearchQueryInput(searchQuery) {
        await this.searchQueryInput.sendKeys(searchQuery);
    }

    async getSearchQueryInput() {
        return this.searchQueryInput.getAttribute('value');
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

export class SearchDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-search-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-search'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
