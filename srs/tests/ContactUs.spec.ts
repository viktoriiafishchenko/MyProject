import { test, expect } from '@playwright/test';
import ContactUsPage from '../pages/ContactUsPage';
import { URLS } from '../data/Urls';
import { faker } from '@faker-js/faker';


let contactUsPage: ContactUsPage;

    test('Contact Us Form', async ({ page }) => {
        await page.goto(URLS.CONTACT_US);
        contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillName(faker.person.firstName());
        await contactUsPage.fillEmail(faker.internet.email());
        await contactUsPage.fillSubject('Test Subject');
        await contactUsPage.fillMessage('Test Message');
        await contactUsPage.uploadFile('file.png');
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        await contactUsPage.clickSubmit();
        await contactUsPage.waitForSuccessMessage();
    });
    
