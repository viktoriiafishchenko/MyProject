import { Page, expect } from '@playwright/test';
import { HomeElements } from './HomeElements';
import { BasePage } from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(page: Page) {
    super(page);
    this.homeElements = new HomeElements(page);
  }

  async clickLoginButton() {
    await this.homeElements.signupLoginButton.click();
  }

  async waitLogoutTextVisible() {
    await expect(this.homeElements.logoutText).toBeVisible();
  }

  async clickContactUsButton() {
    await this.homeElements.contactUsButton.click();
  }

  async clickTestCasesButton() {
    await this.homeElements.testCasesButton.click();
  }

  async clickProductsButton() {
    await this.homeElements.productsButton.click();
  }

  async scrollToFooter() {
    await this.homeElements.footerElement.scrollIntoViewIfNeeded();
  }

  async fillSubscriptionEmail(email: string) {
    await this.homeElements.emailInput.fill(email);
  }

  async clickSubscribeButton() {
    await this.homeElements.subscribeButton.click();
  }

  async clickCartButton() {
    await this.homeElements.cartButton.click();
  }

  async clickDeleteAccountButton() {
    await this.homeElements.deleteAccountButton.click();
  }
}