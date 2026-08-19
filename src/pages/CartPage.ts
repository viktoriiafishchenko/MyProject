import { Page, expect } from '@playwright/test';
import { CartElements } from './CartElements';

export default class CartPage {
    readonly cartElements: CartElements;

    constructor(readonly page: Page) {
        this.cartElements = new CartElements(page);
    }

        async checkCartProductsCount(expectedCount: number) {
            await expect(this.cartElements.cartProducts).toHaveCount(expectedCount);
        }

        async clickProceedToCheckoutButton() {
            await this.cartElements.proceedToCheckoutButton.click();
        }

        async clickContinueOnCartButton() {
            await this.cartElements.continueOnCartButton.click();
        }

        async clickRegisterLoginButton() {
            await this.cartElements.registerLoginButton.click();
        }

        async clickDeleteProductButton() {
            await this.cartElements.deleteProductButton.click();
        }
    }
