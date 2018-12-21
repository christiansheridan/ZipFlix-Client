import { element, by, ElementFinder } from 'protractor';

export class CommentComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-comment div table .btn-danger'));
    title = element.all(by.css('jhi-comment div h2#page-heading span')).first();

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

export class CommentUpdatePage {
    pageTitle = element(by.id('jhi-comment-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    commentInput = element(by.id('field_comment'));
    videoSelect = element(by.id('field_video'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setCommentInput(comment) {
        await this.commentInput.sendKeys(comment);
    }

    async getCommentInput() {
        return this.commentInput.getAttribute('value');
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

export class CommentDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-comment-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-comment'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
