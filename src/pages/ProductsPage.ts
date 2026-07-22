import { Page, expect } from '@playwright/test';
import { ProductsElements } from './ProductsElements';

export default class ProductsPage {
  readonly productsElements: ProductsElements;

  constructor(readonly page: Page) {
    this.productsElements = new ProductsElements(page);
  }

  async waitForProductsPage() {
    await expect(this.productsElements.itemsElement).toBeVisible();
  }

  async clickViewProductButton(index: number) {
    await this.productsElements.viewProductButton.nth(index).click();
  }

  async getProductTitleText() {
    return await this.productsElements.titleText.innerText();
  }

  async fillSearchInput(searchTerm: string) {
        await this.productsElements.searchInput.fill(searchTerm);
    }

    async clickSearchButton() {
        await this.productsElements.searchButton.click();
    }

    async clickAddToCartButton(index: number) {
        await this.productsElements.addToCartButton.nth(index).click();
    }

    async clickContinueShoppingButton() {
        await this.productsElements.continueShoppingButton.click();
}
}