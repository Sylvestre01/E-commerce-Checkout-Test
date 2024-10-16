

export default class CheckoutPage {

    get firstNameField() {return cy.get('#input-payment-firstname');}
    get lastNameField() {return cy.get('#input-payment-lastname');}
    get emailField() {return cy.get('#input-payment-email');}
    get telephoneField() {return cy.get('#input-payment-telephone');}
    get passwordField() {return cy.get('#input-payment-password');}
    get confirmPasswordField() {return cy.get('#input-payment-confirm');}
    get addressField() {return cy.get('#input-payment-address-1');}
    get cityField() {return cy.get('#input-payment-city');}
    get postcodeField() {return cy.get('#input-payment-postcode');}
    get countryField() {return cy.get('#input-payment-country');}
    get stateField() {return cy.get('#input-payment-zone');}
    get newsLetter() {return cy.get('#input-newsletter');}
    get privacy_policy() {return cy.get('#input-account-agree');}
    get termsConditions() {return cy.get('#input-agree');}
    get continueBtn() {return cy.get('#button-save');}
    get confirmOrderBtn() {return cy.get('#button-confirm');}


    enter_first_Name(firstname) {
        this.firstNameField.type(firstname);
        return this;
    }

    enter_last_Name(lastname) {
        this.lastNameField.type(lastname);
        return this;
    }

    enter_email(email) {
        this.emailField.type(email);
        return this;
    }

    enter_telephone(telephone) {
        this.telephoneField.type(telephone);
        return this;
    }

    enter_password(password) {
        this.passwordField.type(password);
        return this;
    }

    enter_confirm_password(password) {
        this.confirmPasswordField.type(password);
        return this;
    }

    enter_address(address1) {
        this.addressField.type(address1);
        return this;
    }

    enter_city(city) {
        this.cityField.type(city);
        return this;
    }

    enter_postcode(postcode) {
        this.postcodeField.type(postcode);
        return this;
    }

    enter_country(country) {
        this.countryField.type(country);
        return this;
    }

    enter_state(state) {
        this.stateField.type(state);
        return this;
    }

    uncheck_newsletter() {
        this.newsLetter.uncheck({ force: true });
    }

    check_privacy_policy() {
        this.privacy_policy.check({ force: true });
    }

    check_terms_conditions() {
        this.termsConditions.check({ force: true });
    }

    click_continue_btn() {
        this.continueBtn.click({ force: true });
    }

    click_confirm_order() {
        this.confirmOrderBtn.click();
    }


    verifyOrderCompletion() {
        cy.contains('Your order has been placed!').should('be.visible');
    }
}