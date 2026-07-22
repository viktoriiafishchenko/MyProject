import { Page, Locator } from "@playwright/test";

export class ProductElements {
    readonly page: Page;
    readonly productElement: Locator;
    readonly image: Locator;
    readonly productInformation: Locator;
    readonly productName: Locator;
    readonly price: Locator;
    readonly quantity: Locator;
    readonly addToCartButton: Locator;
    readonly availability: Locator;
    readonly condition: Locator;
    readonly brand: Locator;
    readonly category: Locator;
    readonly popupElement: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productElement = page.locator('.product-details');
        this.image = this.productElement.locator('[src="/get_product_picture/1"]');
        this.productInformation = this.productElement.locator('.product-information');
        this.productName = this.productInformation.locator('h2');
        this.category = this.productInformation.getByText('Category:');
        this.price = this.productInformation.getByText('Rs.');
        this.quantity = this.productInformation.locator('[name="quantity"]');
        this.addToCartButton = this.productInformation.locator('.cart');
        this.availability = this.productInformation.locator('p', { hasText: 'Availability:' });
        this.condition = this.productInformation.locator('p', { hasText: 'Condition:' });
        this.brand = this.productInformation.locator('p', { hasText: 'Brand:' });

        this.popupElement = page.locator('#cartModal');
        this.continueShoppingButton = this.popupElement.locator('.btn-success');
    }
}   