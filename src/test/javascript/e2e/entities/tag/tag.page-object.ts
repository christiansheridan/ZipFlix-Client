import { element, by, ElementFinder } from 'protractor';

export class TagComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-tag div table .btn-danger'));
    title = element.all(by.css('jhi-tag div h2#page-heading span')).first();

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

export class TagUpdatePage {
    pageTitle = element(by.id('jhi-tag-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    profileSelect = element(by.id('field_profile'));
    videoSelect = element(by.id('field_video'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async profileSelectLastOption() {
        await this.profileSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async profileSelectOption(option) {
        await this.profileSelect.sendKeys(option);
    }

    getProfileSelect(): ElementFinder {
        return this.profileSelect;
    }

    async getProfileSelectedOption() {
        return this.profileSelect.element(by.css('option:checked')).getText();
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

export class TagDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-tag-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-tag'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
