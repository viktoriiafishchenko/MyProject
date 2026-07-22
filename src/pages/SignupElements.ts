import { Page, Locator } from '@playwright/test';

export class SignupElements {
  readonly page: Page;
  readonly signupForm: Locator;
  readonly passwordInput: Locator;
  readonly dayBirthSelect: Locator;
  readonly monthBirthSelect: Locator;
  readonly yearBirthSelect: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly address1Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupForm = page.locator('.login-form');
    this.passwordInput = this.signupForm.getByTestId('password');
    this.dayBirthSelect = this.signupForm.getByTestId('days');
    this.monthBirthSelect = this.signupForm.getByTestId('months');
    this.yearBirthSelect = this.signupForm.getByTestId('years');
    this.firstNameInput = this.signupForm.getByTestId('first_name');
    this.lastNameInput = this.signupForm.getByTestId('last_name');
    this.address1Input = this.signupForm.getByTestId('address');
    this.countrySelect = this.signupForm.getByTestId('country');
    this.stateInput = this.signupForm.getByTestId('state');
    this.cityInput = this.signupForm.getByTestId('city');
    this.zipcodeInput = this.signupForm.getByTestId('zipcode');
    this.mobileNumberInput = this.signupForm.getByTestId('mobile_number');
    this.createAccountButton = this.signupForm.getByTestId('create-account');
  }
}

