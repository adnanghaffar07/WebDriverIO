
const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart');
const TopLeftPanelPage = require('../pageobjects/topleftpanel');
const Constant = require('../data/constants');
const URL = require('../data/url');
const expect = require('chai').expect;
const readlineSync = require('readline-sync');


describe('Order Confirmation Test', () => {
    it('should login with valid credentials, place an order then logout', () => {
        browser.maximizeWindow();
        LoginPage.open();

        let userName = readlineSync.question('Enter user name: ');
        let password = readlineSync.question('Enter password: ');;
        LoginPage.login(userName, password);

        //Verify user logged in
        expect(browser.getUrl()).to.equal(URL.baseURL + '/inventory.html');

        CartPage.clickAddToCartFleeceJacketButton();
        // Verify product add to cart
        expect(CartPage.getProductCountText()).to.equal('1');

        CartPage.clickCartButton();
        // Verify fleece jacket product text from cart
        expect(CartPage.getCartFleeceJacketText()).to.equal('Sauce Labs Fleece Jacket');
        // Verify fleece jacket product quantity
        expect(CartPage.getCartFleeceJacketQuantityText()).to.equal('1');
        // Verify fleece jacket price
        expect(CartPage.getCartFleeceJacketPriceText()).to.equal('49.99');
        // Verify product remove button
        expect(CartPage.isCartFleeceJacketRemoveButtonDisplay()).to.equal(true);
        // Verify continue shopping button
        expect(CartPage.isContinueShoppingButtonDisplayed()).to.equal(true);

        browser.refresh();
        TopLeftPanelPage.clickTopMenu();
        TopLeftPanelPage.clickAllItems();

        CartPage.clickAddBikeLightToCart();
        // Verify another product add to cart
        expect(CartPage.getProductCountText()).to.equal('2');

        CartPage.clickCartButton();
        // Verify Bike light product text from cart
        expect(CartPage.getCartBikeLightText()).to.equal('Sauce Labs Bike Light');
        // Verify bike light cart quantity
        expect(CartPage.getCartBikeLightQuantityText()).to.equal('1');
        // Verify bike light cart price
        expect(CartPage.getCartBikeLightPriceText()).to.equal('9.99');
        // Verify product remove button
        expect(CartPage.isCartBikeLightRemoveButtonDisplay()).to.equal(true)
        // Verify continue shopping button
        expect(CartPage.isContinueShoppingButtonDisplayed()).to.equal(true);

        CartPage.clickCheckOutButton();
        CartPage.enterFirstName(Constant.firstName);
        CartPage.enterLastName(Constant.lastName);
        CartPage.enterZipCode(Constant.zipCode);
        CartPage.clickContinueButton();
        CartPage.clickFinishButton();
        // Verify order confirmation
        expect(CartPage.getOrderConfirmationText()).to.equal('THANK YOU FOR YOUR ORDER');

        TopLeftPanelPage.clickTopMenu();
        LoginPage.logout();
        // Verify user log out
        expect(browser.getUrl()).equal(URL.baseURL + "/index.html");
    });
});


