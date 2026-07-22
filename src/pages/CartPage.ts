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

    }