import { Page, Locator } from "@playwright/test";

export class CartElements {
  readonly page: Page;
  readonly cartTable: Locator;
  readonly cartProducts: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;
  readonly productTotal: Locator;
  readonly product: (productId: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartTable = page.locator('#cart_info');
    this.cartProducts = this.cartTable.locator('tbody tr');
    this.product = (productId: string) => this.cartTable.locator(`#product-${productId}`);

    this.productDescription = this.cartProducts.locator('.cart_description');
    this.productPrice = this.cartProducts.locator('.cart_price');
    this.productQuantity = this.cartProducts.locator('.cart_quantity');
    this.productTotal = this.cartProducts.locator('.cart_total_price');
  }
}