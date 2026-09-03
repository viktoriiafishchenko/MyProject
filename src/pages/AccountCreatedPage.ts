import { Page } from '@playwright/test';
import { AccountCreatedElements } from './AccountCreatedElements';
import { BasePage } from './BasePage';

export default class AccountCreatedPage extends BasePage {
  readonly accountCreatedElements: AccountCreatedElements;

  constructor(page: Page) {
    super(page);
    this.accountCreatedElements = new AccountCreatedElements(page);
  }

  async clickContinueButton() {
    await this.accountCreatedElements.continueButton.click();
  }
}
