import { Page, expect } from '@playwright/test';
import { HomeElements } from './HomeElements';

export default class HomePage {
  readonly homeElements: HomeElements;
  constructor(readonly page: Page) {
    this.homeElements = new HomeElements(page);
  }

  async clickLoginButton(){
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
}