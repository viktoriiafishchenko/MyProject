import { Page, Locator } from '@playwright/test';

export class SignupLoginElements {
  readonly page: Page;
  readonly loginElement: Locator;
  readonly loginToYourAccountText: Locator;
  readonly emailLoginInput: Locator;
  readonly passwordLoginInput: Locator;
  readonly loginButton: Locator;
  readonly incorrectEmailErrorMessage: Locator;
  readonly signupElement: Locator;
  readonly newUserSignupText: Locator;
  readonly nameInput: Locator;
  readonly emailSignupInput: Locator;
  readonly signupButton: Locator;
  readonly existingUserErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginElement = page.locator('.login-form');
    this.loginToYourAccountText = this.loginElement.getByText('Login to your account');
    this.emailLoginInput = this.loginElement.getByTestId('login-email');
    this.passwordLoginInput = this.loginElement.getByTestId('login-password');
    this.loginButton = this.loginElement.getByTestId('login-button');
    this.incorrectEmailErrorMessage = this.loginElement.getByText('Your email or password is incorrect!');

    this.signupElement = page.locator('.signup-form');
    this.newUserSignupText = this.signupElement.getByText('New User Signup!');
    this.nameInput = this.signupElement.getByTestId('signup-name');
    this.emailSignupInput = this.signupElement.getByTestId('signup-email');
    this.signupButton = this.signupElement.getByTestId('signup-button');
    this.existingUserErrorMessage = this.signupElement.getByText('Email Address already exist!');
  }
}
