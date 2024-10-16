
export default class DashboardPage{

    get categoryMenu() {return cy.get('.icon-left.both.text-reset').click({force: true})};
    get MP3PlayerCategory() { return cy.xpath('//span[normalize-space()=\'MP3 Players\']')}


    clickShopByCategory() {
        this.categoryMenu;
    }

    clickMP3PlayerCategory() {
        this.MP3PlayerCategory.click();
    }

}
