import { test, expect } from '@playwright/test';
import { URLS } from '../data/Urls';
import ProductsPage from '../pages/ProductsPage';
import { ProductsElements } from '../pages/ProductsElements';
import HomePage from '../pages/HomePage';
import { CartElements } from '../pages/CartElements';
import ProductPage from '../pages/ProductPage';
import { ProductElements } from '../pages/ProductElements';

test('Add Products in Cart', async({page}) => {
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

test('Verify Product Quantity in Cart', async({page}) => {
    await page.goto(URLS.FIRST_PRODUCT)
    const productPage = new ProductPage(page);
    const productElements = new ProductElements(page);
    await productPage.fillQuantityInput('4');
    await productPage.clickAddToCartButton();
    await productPage.clickContinueShoppingButton();
    
    const homePage = new HomePage(page);
    await homePage.clickCartButton();
    await expect(page).toHaveURL(URLS.CART);
    const cartElements = new CartElements(page);
    await expect(cartElements.productQuantity).toHaveText('4');
});