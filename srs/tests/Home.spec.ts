import { test, expect } from '@playwright/test';
import { URLS } from '../data/Urls';
import HomePage from  '../pages/HomePage';

let homePage: HomePage;

test('Click on SignupLogin Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  homePage = new HomePage(page);
  await homePage.clickLoginButton();
  await expect(page).toHaveURL(URLS.LOGIN);
});

test('Click on Contact us Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  homePage = new HomePage(page);
  await homePage.clickContactUsButton();
  await expect(page).toHaveURL(URLS.CONTACT_US);
});

test('Click on Test Cases Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  homePage = new HomePage(page);
  await homePage.clickTestCasesButton();
  await expect(page).toHaveURL(URLS.TEST_CASES);
});

test('Click on Products Button', async ({ page }) => {
  await page.goto(URLS.HOME);
  homePage = new HomePage(page);
  await homePage.clickProductsButton();
  await expect(page).toHaveURL(URLS.PRODUCTS);
});