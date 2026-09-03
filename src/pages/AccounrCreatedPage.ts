import { Page, expect } from '@playwright/test';
import { AccountCreatedElements } from './AccauntCreatedElements';

export default class AccountCreatedPage {
    readonly accountCreatedElements: AccountCreatedElements;

    constructor(readonly page: Page) {
        this.accountCreatedElements = new AccountCreatedElements(page);
    }

    async clickContinueButton() {
        await this.accountCreatedElements.continueButton.click();
    }
}