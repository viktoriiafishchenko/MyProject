import { expect, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async waitForUrl(expectedUrl: string | RegExp) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
