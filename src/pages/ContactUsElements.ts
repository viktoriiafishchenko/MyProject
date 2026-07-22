import { Page, Locator } from '@playwright/test';

export class ContactUsElements {
    readonly page: Page;
    readonly contactUsForm: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly submitButton: Locator;
    readonly chooseFileSection: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactUsForm = page.locator('.contact-form');
        this.nameInput = this.contactUsForm.getByTestId('name');
        this.emailInput = this.contactUsForm.getByTestId('email');
        this.subjectInput = this.contactUsForm.getByTestId('subject');
        this.messageInput = this.contactUsForm.getByTestId('message');
        this.submitButton = this.contactUsForm.getByTestId('submit-button');
        this.chooseFileSection = this.contactUsForm.locator('input[name="upload_file"]');
        this.successMessage = this.contactUsForm.locator('.alert-success');
    }
}