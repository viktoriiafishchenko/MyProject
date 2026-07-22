import { Page, expect } from '@playwright/test';
import {ProductElements} from './ProductElements';

export default class ProductPage {
    readonly productElements: ProductElements;

    constructor(readonly page: Page) {
        this.productElements = new ProductElements(page);
    }

    async checkImage() {
        await expect(this.productElements.image).toBeVisible();
    }
    async checkAddToCartButton() {
        await expect(this.productElements.addToCartButton).toBeVisible();
    }

    async fillQuantityInput(quantity: string) {
        await this.productElements.quantity.fill(quantity);
    }

    async clickAddToCartButton() {
        await this.productElements.addToCartButton.click();
    }

    async clickContinueShoppingButton() {
        await this.productElements.continueShoppingButton.click();
    }
}