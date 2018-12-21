import { element, by, ElementFinder } from 'protractor';

export class ZipFlixUserComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-zip-flix-user div table .btn-danger'));
    title = element.all(by.css('jhi-zip-flix-user div h2#page-heading span')).first();

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

export class ZipFlixUserUpdatePage {
    pageTitle = element(by.id('jhi-zip-flix-user-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    dateOfBirthInput = element(by.id('field_dateOfBirth'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setDateOfBirthInput(dateOfBirth) {
        await this.dateOfBirthInput.sendKeys(dateOfBirth);
    }

    async getDateOfBirthInput() {
        return this.dateOfBirthInput.getAttribute('value');
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

export class ZipFlixUserDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-zipFlixUser-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-zipFlixUser'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
