
export default class Mp3PlayerPage {

    get MP3Players() {return cy.get('#mz-product-grid-image-28-212408 > div > div.carousel-item.active > img'); }

    clickOnFirstProduct() {
        this.MP3Players.click();
    }
}