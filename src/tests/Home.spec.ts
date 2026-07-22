import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { URLS } from '../data/Urls';
import HomePage from  '../pages/HomePage';

test('Click on SignupLogin Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  const homePage = new HomePage(page);
  await homePage.clickLoginButton();
  await expect(page).toHaveURL(URLS.LOGIN);
});

test('Click on Contact us Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  const homePage = new HomePage(page);
  await homePage.clickContactUsButton();
  await expect(page).toHaveURL(URLS.CONTACT_US);
});

test('Click on Test Cases Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  const homePage = new HomePage(page);
  await homePage.clickTestCasesButton();
  await expect(page).toHaveURL(URLS.TEST_CASES);
});

test('Click on Products Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  const homePage = new HomePage(page);
  await homePage.clickProductsButton();
  await expect(page).toHaveURL(URLS.PRODUCTS);
});

test('Verify Subscription in home page',async ({ page }) => {
  await page.goto(URLS.HOME);
  const homePage = new HomePage(page);
  await homePage.scrollToFooter();
  await expect(homePage.homeElements.footerElement).toBeVisible();
  await expect(homePage.homeElements.subscriptionSection).toContainText('Subscription');
  await homePage.fillSubscriptionEmail(faker.internet.email());
  await homePage.clickSubscribeButton();
  //TODO: Fix the test, because the message is displayed for a short time after clicking on Subscribe button
  //await expect(homePage.homeElements.succsessMessage).toHaveText('You have been successfully subscribed!');
})