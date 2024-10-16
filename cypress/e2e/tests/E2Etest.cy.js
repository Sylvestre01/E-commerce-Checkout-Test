import {checkoutPage, dashboardPage, mp3PlayerPage, faker, productPage, dataGenerator} from "../utils/imports";
import {ENDPOINT} from "../config/CONSTANTS";

let password = dataGenerator.generateRandomCode(6)
let confirmPassword = password
describe('E-commerce Checkout Process', () => {


    before(() => {
        // Navigate to the website before the tests
        cy.visit(ENDPOINT);
        cy.task('logMessage', 'Visiting the dashboard page');
    });

    it(' add a product to cart and complete checkout', () => {
        // Step 1: Click on Shop by Category
        cy.task('logMessage', 'Clicking on Shop by Category');
        dashboardPage.clickShopByCategory();
        // Assertion: Verify the category page is displayed
        cy.contains('Top categories').should('be.visible');


        // Step 2: Click on MP3 Player
        cy.task('logMessage', 'Clicking on MP3 Player category');
        dashboardPage.clickMP3PlayerCategory();
        // Assertion: Verify MP3 player category page is displayed
        cy.url().should('include', 'path=34');


        // Step 3: Click on a product
        cy.task('logMessage', 'Selecting a product');
        mp3PlayerPage.clickOnFirstProduct();
        // Assertion: Verify product page is displayed
        cy.url().should('include', 'product/product');
        cy.contains('HTC Touch HD').should('be.visible');

        // Step 4: Proceed to checkout
        cy.task('logMessage', 'Adding product to cart and proceeding to checkout');
        productPage.click_buy_btn();
        // Assertion: Verify product page is displayed
        cy.contains('Account').should('be.visible');


        // Step 5: Fill in the details
        cy.task('logMessage', 'Submitting personal details');
        checkoutPage.enter_first_Name(faker.person.firstName());
        checkoutPage.enter_last_Name(faker.person.lastName());
        checkoutPage.enter_email(faker.internet.email());
        checkoutPage.enter_telephone("+2349999999891");
        checkoutPage.enter_password(password)
        checkoutPage.enter_confirm_password(confirmPassword)
        checkoutPage.enter_address(faker.location.streetAddress())
        checkoutPage.enter_city(faker.location.city())
        checkoutPage.enter_postcode(faker.location.zipCode())
        checkoutPage.enter_country(faker.location.country())
        checkoutPage.enter_state(faker.location.state())


        // Step 6: Uncheck the store newsletter
        cy.task('logMessage', 'Unchecking the store newsletter box');
        checkoutPage.uncheck_newsletter();
        checkoutPage.check_privacy_policy()
        checkoutPage.check_terms_conditions()
        checkoutPage.click_continue_btn()
        // Assertion: Verify newsletter checkbox is unchecked
        cy.get('input[name="newsletter"]').should('not.be.checked');

        // Step 7: Complete checkout
        cy.task('logMessage', 'Confirming the order');
        checkoutPage.click_confirm_order();
        // Assertion: Verify order confirmation
        cy.url().should('include', '/success');
        cy.contains('Your order has been placed').should('be.visible');
    });

    afterEach(() => {
        cy.task('logMessage', 'Test completed');
    });

});