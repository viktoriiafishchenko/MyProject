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
  readonly proceedToCheckoutButton: Locator;
  readonly checkoutPopup: Locator;
  readonly continueOnCartButton: Locator;
  readonly registerLoginButton: Locator;
  readonly deleteProductButton: Locator;
  readonly emptyCartElement: Locator;
  readonly cartIsEmptyText: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.cartTable = page.locator('#cart_info');
    this.cartProducts = this.cartTable.locator('tbody tr');
    this.product = (productId: string) => this.cartTable.locator(`#product-${productId}`);

    this.productDescription = this.cartProducts.locator('.cart_description');
    this.productPrice = this.cartProducts.locator('.cart_price');
    this.productQuantity = this.cartProducts.locator('.cart_quantity');
    this.productTotal = this.cartProducts.locator('.cart_total_price');
    this.deleteProductButton = this.cartProducts.locator('.cart_quantity_delete');
    this.proceedToCheckoutButton = page.locator('.check_out');

    this.checkoutPopup = page.locator('.modal-content');
    this.continueOnCartButton = this.checkoutPopup.locator('.btn-success');
    this.registerLoginButton = this.checkoutPopup.getByRole('link', { name: 'Register / Login' })

    this.emptyCartElement = page.locator('#empty_cart');
    this.cartIsEmptyText = this.emptyCartElement.locator('.text-center')
  }
}