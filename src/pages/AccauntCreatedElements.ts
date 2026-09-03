import { Page, Locator } from "@playwright/test";

export class AccountCreatedElements { 
    readonly page: Page;
    readonly accountCreatedElement: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountCreatedElement = page.locator('.title.text-center');
        this.continueButton = page.getByTestId('continue-button');
    }
}