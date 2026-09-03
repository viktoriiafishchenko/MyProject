import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CheckoutElements } from './CheckoutElements';

export default class CheckoutPage extends BasePage {
    readonly checkoutElements: CheckoutElements;

    constructor(page: Page) {
        super(page);
        this.checkoutElements = new CheckoutElements(page);
    }

    async clickPleaseOrderButton() {
        await this.checkoutElements.pleaseOrderButton.scrollIntoViewIfNeeded();
        await this.checkoutElements.pleaseOrderButton.click();
    }
}