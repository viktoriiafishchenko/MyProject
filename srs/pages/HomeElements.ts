import { Page, Locator } from '@playwright/test';

export class HomeElements {
  readonly page: Page;
  readonly carouselElement: Locator;
  readonly signupLoginButton: Locator;
  readonly navigateBar: Locator;
  readonly signupLoginText: Locator;
  readonly logoutText: Locator;
  readonly contactUsButton: Locator;
  readonly testCasesButton: Locator;
  readonly productsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.carouselElement = page.locator('[data-ride="carousel"]');
    this.signupLoginButton = page.getByText('Signup / Login');

    // create a new instance of Navigate bar
    this.navigateBar = page.locator('.navbar-nav');
    this.signupLoginText = this.navigateBar.getByText('Signup/Login');
    this.logoutText = this.navigateBar.getByText('Logout');
    this.contactUsButton = this.navigateBar.getByText('Contact us');
    this.testCasesButton = this.navigateBar.getByText('Test Cases');
    this.productsButton = this.navigateBar.getByText('Products');
  }
}
