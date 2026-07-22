import { Page, expect } from '@playwright/test';
import { ContactUsElements } from './ContactUsElements';
import path from 'path';

export default class ContactUsPage {
  readonly contactUsElements: ContactUsElements;

  constructor(readonly page: Page) {
    this.contactUsElements = new ContactUsElements(page);
  }

  async fillName(name: string) {
    await this.contactUsElements.nameInput.fill(name);
  }

  async fillEmail(email: string) {
    await this.contactUsElements.emailInput.fill(email);
  }

  async fillSubject(subject: string) {
    await this.contactUsElements.subjectInput.fill(subject);
  }

  async fillMessage(message: string) {
    await this.contactUsElements.messageInput.fill(message);
  }

  async clickSubmit() {
    await this.contactUsElements.submitButton.click();
  }

  async uploadFile(fileName: string) {
    const filePath = path.resolve(__dirname, '..', 'uploads', fileName);
    await this.contactUsElements.chooseFileSection.setInputFiles(filePath);
  }

  async waitForSuccessMessage() {
    await expect(this.contactUsElements.successMessage).toBeVisible();
  }
}
