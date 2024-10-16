
export default class ProductPage {

    get buyBtn() { return cy.get('#entry_216843 > button'); }
    get addToCartBtn() { return cy.get('#entry_216842 > button'); }
    get checkout() { return cy.contains('div > div.toast-body > div.form-row > div:nth-child(2) > a'); }


    addProductToCart() {
        this.addToCartBtn.click();
    }

    click_buy_btn() {
        this.buyBtn.click();
    }

    click_checkout_btn() {
        this.checkout.click();
    }

}


