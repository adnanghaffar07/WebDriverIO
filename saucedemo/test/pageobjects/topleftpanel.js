class TopLeftPanel {
    get topMenu() { return $('.bm-burger-button')}
    get allItems() {return $('a#inventory_sidebar_link')}

    clickTopMenu(){
        this.topMenu.waitForDisplayed(30);
        this.topMenu.click();
    }

    clickAllItems(){
        this.allItems.waitForDisplayed(30);
        this.allItems.click();
    }
}
module.exports = new TopLeftPanel();