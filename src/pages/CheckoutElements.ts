import { Page, Locator } from "@playwright/test";

export class CheckoutElements {
    readonly page: Page;
    readonly pleaseOrderButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.pleaseOrderButton = page.locator('.check_out');
    }
}