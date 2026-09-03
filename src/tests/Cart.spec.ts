import { test, expect } from '@playwright/test';
import { URLS } from '../data/Urls';
import ProductsPage from '../pages/ProductsPage';
import { ProductsElements } from '../pages/ProductsElements';
import HomePage from '../pages/HomePage';
import { CartElements } from '../pages/CartElements';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import SignupLoginPage from '../pages/SignupLoginPage';
import { fa, faker } from '@faker-js/faker';
import SignupPage from '../pages/SignupPage';
import CheckoutPage from '../pages/CheckoutPage';
import PaymentPage from '../pages/PaymentPage';

test('Add Products in Cart', async ({ page }) => {
    await page.goto(URLS.PRODUCTS)
    const productsPage = new ProductsPage(page);
    const productsElements = new ProductsElements(page);
    await productsElements.addToCartButton.nth(2).hover();
    await productsPage.clickAddToCartButton(2);
    await productsPage.clickContinueShoppingButton();
    await productsElements.addToCartButton.nth(2).hover();
    await productsPage.clickAddToCartButton(2);
    await productsPage.clickContinueShoppingButton();

    const homePage = new HomePage(page);
    await homePage.clickCartButton();
    await expect(page).toHaveURL(URLS.CART);
    const cartElements = new CartElements(page);
    await expect(cartElements.cartProducts).toHaveCount(1);
    await expect(cartElements.productDescription).toHaveText('Men Tshirt\nMen > Tshirts');
    await expect(cartElements.productPrice).toHaveText('Rs. 400');
    await expect(cartElements.productQuantity).toHaveText('2');
    await expect(cartElements.productTotal).toHaveText('Rs. 800');
});

test('Verify Product Quantity in Cart', async ({ page }) => {
    await page.goto(URLS.FIRST_PRODUCT)
    const productPage = new ProductPage(page);
    await productPage.fillQuantityInput('4');
    await productPage.clickAddToCartButton();
    await productPage.clickContinueShoppingButton();

    const homePage = new HomePage(page);
    await homePage.clickCartButton();
    await expect(page).toHaveURL(URLS.CART);
    const cartElements = new CartElements(page);
    await expect(cartElements.productQuantity).toHaveText('4');
});

test('Register while Checkout', async ({ page }) => {
    await page.goto(URLS.FIRST_PRODUCT)
    const productPage = new ProductPage(page);
    await productPage.clickAddToCartButton();
    await productPage.clickContinueShoppingButton();
    const homePage = new HomePage(page);
    await homePage.clickCartButton();
    await expect(page).toHaveURL(URLS.CART);
    const cartPage = new CartPage(page);
    await cartPage.clickProceedToCheckoutButton();
    const cartElements = new CartElements(page);
    await cartPage.clickRegisterLoginButton();
    await expect(page).toHaveURL(URLS.LOGIN);
    const signupLoginPage = new SignupLoginPage(page);
    await signupLoginPage.fillSignupName(faker.person.firstName());
    await signupLoginPage.fillSignupEmail(faker.internet.email());
    await signupLoginPage.clickSignupButton();
    await expect(page).toHaveURL(URLS.SIGNUP);

    const signupPage = new SignupPage(page);
    await signupPage.fillPassword(faker.internet.password());
    await signupPage.selectDayBirth('1');
    await signupPage.selectMonthBirth('January');
    await signupPage.selectYearBirth('1990');
    await signupPage.fillFirstName(faker.person.firstName());
    await signupPage.fillLastName(faker.person.lastName());
    await signupPage.fillAddress1(faker.location.streetAddress());
    await signupPage.selectCountry('United States');
    await signupPage.fillState(faker.location.state());
    await signupPage.fillCity(faker.location.city());
    await signupPage.fillZipcode(faker.location.zipCode());
    await signupPage.fillMobileNumber(faker.phone.number());
    await signupPage.clickCreateAccountButton();
    await expect(page).toHaveURL(URLS.ACCOUNT_CREATED);
});

test('Remove Products From Cart', async ({ page }) => {
    await page.goto(URLS.PRODUCTS)
    const productsPage = new ProductsPage(page);
    const productsElements = new ProductsElements(page);
    await productsElements.addToCartButton.nth(2).hover();
    await productsPage.clickAddToCartButton(2);
    await productsPage.clickViewCartButton();
    await expect(page).toHaveURL(URLS.CART);
    const cartElements = new CartElements(page);
    await expect(cartElements.cartProducts).toHaveCount(1);
    const cartPage = new CartPage(page);
    await cartPage.clickDeleteProductButton();
    await expect(cartElements.emptyCartElement).toBeVisible();
    await expect(cartElements.cartIsEmptyText).toHaveText('Cart is empty! Click here to buy products.');
});

test('Pay and Finish order', async ({ page }) => {
    await page.goto(URLS.LOGIN);
    const signupLoginPage = new SignupLoginPage(page);
    await signupLoginPage.fillSignupName(faker.person.firstName());
    await signupLoginPage.fillSignupEmail(faker.internet.email());
    await signupLoginPage.clickSignupButton();
    await expect(page).toHaveURL(URLS.SIGNUP);

    const signupPage = new SignupPage(page);
    await signupPage.fillPassword(faker.internet.password());
    await signupPage.selectDayBirth('1');
    await signupPage.selectMonthBirth('January');
    await signupPage.selectYearBirth('1990');
    await signupPage.fillFirstName(faker.person.firstName());
    await signupPage.fillLastName(faker.person.lastName());
    await signupPage.fillAddress1(faker.location.streetAddress());
    await signupPage.selectCountry('United States');
    await signupPage.fillState(faker.location.state());
    await signupPage.fillCity(faker.location.city());
    await signupPage.fillZipcode(faker.location.zipCode());
    await signupPage.fillMobileNumber(faker.phone.number());
    await signupPage.clickCreateAccountButton();
    await expect(page).toHaveURL(URLS.ACCOUNT_CREATED);

    await page.goto(URLS.FIRST_PRODUCT)
    const productPage = new ProductPage(page);
    await productPage.clickAddToCartButton();
    await productPage.clickViewCartButton();
    await expect(page).toHaveURL(URLS.CART);
    const cartPage = new CartPage(page);
    await cartPage.clickProceedToCheckoutButton();
    await expect(page).toHaveURL(URLS.CHECKOUT);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickPleaseOrderButton();
    await expect(page).toHaveURL(URLS.PAYMENT);
    const paymentPage = new PaymentPage(page);
    await paymentPage.fillNameOnCardInput(faker.person.fullName());
    await paymentPage.fillCardNumberInput(faker.finance.creditCardNumber());
    await paymentPage.fillCvcInput(faker.finance.creditCardCVV());
    await paymentPage.fillExpirationMonthInput(faker.date.month({ abbreviated: true }));
    await paymentPage.fillExpirationYearInput(faker.date.future().getFullYear().toString());
    await paymentPage.clickPayAndConfirmButton();
    await expect(page).toHaveURL(URLS.PAYMENT_DONE);

    //TODO: Check that order is placed and visible in the user account
    //TODO: Check page for order confirmation message
    //TODO: Download invoice and check that it is correct
});
