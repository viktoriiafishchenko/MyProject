import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { SignupLoginElements } from './SignupLoginElements';

export default class SignupLoginPage extends BasePage {
    readonly signupLoginElements: SignupLoginElements;

    constructor(page: Page) {
        super(page);
        this.signupLoginElements = new SignupLoginElements(page);
    }

    async fillSignupName(name: string) {
        await this.signupLoginElements.nameInput.fill(name);
    }
    
    async fillSignupEmail(email: string) {
        await this.signupLoginElements.emailSignupInput.fill(email);
    }

    async clickSignupButton() {
        await this.signupLoginElements.signupButton.click();
    }

    async fillLoginEmail(email: string) {
        await this.signupLoginElements.emailLoginInput.fill(email);
    }

    async fillLoginPassword(password: string) {
        await this.signupLoginElements.passwordLoginInput.fill(password);
    }

    async clickLoginButton() {
        await this.signupLoginElements.loginButton.click();
    }

    async waitForErrorMessage() {
        await expect(this.signupLoginElements.incorrectEmailErrorMessage).toBeVisible();
    }

    async waitForExistingUserErrorMessage() {
        await expect(this.signupLoginElements.existingUserErrorMessage).toBeVisible();
    }
}