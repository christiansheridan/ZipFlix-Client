import { element, by, ElementFinder } from 'protractor';

export class ProfileComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-profile div table .btn-danger'));
    title = element.all(by.css('jhi-profile div h2#page-heading span')).first();

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

export class ProfileUpdatePage {
    pageTitle = element(by.id('jhi-profile-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    dateOfBirthInput = element(by.id('field_dateOfBirth'));
    imageURLInput = element(by.id('field_imageURL'));
    zipFlixUserSelect = element(by.id('field_zipFlixUser'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async setDateOfBirthInput(dateOfBirth) {
        await this.dateOfBirthInput.sendKeys(dateOfBirth);
    }

    async getDateOfBirthInput() {
        return this.dateOfBirthInput.getAttribute('value');
    }

    async setImageURLInput(imageURL) {
        await this.imageURLInput.sendKeys(imageURL);
    }

    async getImageURLInput() {
        return this.imageURLInput.getAttribute('value');
    }

    async zipFlixUserSelectLastOption() {
        await this.zipFlixUserSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async zipFlixUserSelectOption(option) {
        await this.zipFlixUserSelect.sendKeys(option);
    }

    getZipFlixUserSelect(): ElementFinder {
        return this.zipFlixUserSelect;
    }

    async getZipFlixUserSelectedOption() {
        return this.zipFlixUserSelect.element(by.css('option:checked')).getText();
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

export class ProfileDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-profile-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-profile'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
