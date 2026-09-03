import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SignupElements } from './SignupElements';

export default class SignupPage extends BasePage {
  readonly signupElements: SignupElements;

  constructor(page: Page) {
    super(page);
    this.signupElements = new SignupElements(page);
  }

  async fillPassword(password: string) {
    await this.signupElements.passwordInput.fill(password);
  }

  async selectDayBirth(day: string) {
    await this.signupElements.dayBirthSelect.selectOption(day);
  }

  async selectMonthBirth(month: string) {
    await this.signupElements.monthBirthSelect.selectOption(month);
  }

  async selectYearBirth(year: string) {
    await this.signupElements.yearBirthSelect.selectOption(year);
  }

  async fillFirstName(firstName: string) {
    await this.signupElements.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.signupElements.lastNameInput.fill(lastName);
  }

  async fillAddress1(address: string) {
    await this.signupElements.address1Input.fill(address);
  }

  async selectCountry(country: string) {
    await this.signupElements.countrySelect.selectOption(country);
  }

  async fillState(state: string) {
    await this.signupElements.stateInput.fill(state);
  }

  async fillCity(city: string) {
    await this.signupElements.cityInput.fill(city);
  }

  async fillZipcode(zipcode: string) {
    await this.signupElements.zipcodeInput.fill(zipcode);
  }

  async fillMobileNumber(mobileNumber: string) {
    await this.signupElements.mobileNumberInput.fill(mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.signupElements.createAccountButton.click();
  }
}
