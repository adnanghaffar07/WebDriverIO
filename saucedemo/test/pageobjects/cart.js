
class Cart {

    get addFleeceJacketToCartBtn () { return $('#inventory_container .inventory_list .inventory_item:nth-child(4) button.btn_inventory') }
    get addProductCount() {return $('span.shopping_cart_badge')}
    get cartBtn(){return $('#shopping_cart_container a.shopping_cart_link')}
    get cartFleeceJacket() { return $('#item_5_title_link div')};
    get cartFleeceJacketQuantity(){ return $('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_quantity')}
    get checkOutBtn() { return $('a.checkout_button')}
    get firstName() {return $('#first-name')}
    get lastName(){ return $('#last-name')}
    get zipCode(){ return $('#postal-code')}
    get continueBtn(){ return $('input.btn_primary.cart_button')}
    get finishBtn() { return $('a.btn_action.cart_button')}
    get cartFleeceJacketPrice(){return $('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div')}
    get continueShoppingBtn(){return $('a.btn_secondary')}
    get cartFleeceJacketRemoveButton(){return $('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > button')}
    get addBikeLightToCartBtn(){return $('#inventory_container .inventory_list .inventory_item:nth-child(2) button.btn_inventory')}
    get cartBikeLightText(){return $('#item_0_title_link > div')}
    get cartBikeLightQuantity(){return $('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_quantity')}
    get cartBikeLightPrice(){return $('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div')}
    get cartBikeLightRemoveBtn(){return $('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > button')}
    get orderConfirmation(){return $('h2.complete-header')}

    clickAddToCartFleeceJacketButton(){
        this.addFleeceJacketToCartBtn.click();
    }

    getProductCountText(){
        this.addProductCount.waitForDisplayed(30);
        return this.addProductCount.getText();
    }

    clickCartButton(){
        this.cartBtn.click();
    }

    getCartFleeceJacketText(){
        this.cartFleeceJacket.waitForDisplayed(30);
        return this.cartFleeceJacket.getText();
    }

    getCartFleeceJacketQuantityText(){
        this.cartFleeceJacketQuantity.waitForDisplayed(30);
        return this.cartFleeceJacketQuantity.getText();
    }

    getCartFleeceJacketPriceText(){
        this.cartFleeceJacketPrice.waitForDisplayed(30);
        return this.cartFleeceJacketPrice.getText();
    }

    isContinueShoppingButtonDisplayed(){
        if(this.continueShoppingBtn.isDisplayed()){
            return true;
        }else {
            return false;
        }
    }

    isCartFleeceJacketRemoveButtonDisplay(){
        if(this.cartFleeceJacketRemoveButton.isDisplayed()){
            return true;
        }else {
            return false;
        }
    }

    clickAddBikeLightToCart(){
        this.addBikeLightToCartBtn.waitForDisplayed(30);
        this.addBikeLightToCartBtn.click();
    }

    getCartBikeLightText(){
        this.cartBikeLightText.waitForDisplayed(30);
        return this.cartBikeLightText.getText();
    }

    getCartBikeLightQuantityText(){
        this.cartBikeLightQuantity.waitForDisplayed(30);
        return this.cartBikeLightQuantity.getText();
    }

    getCartBikeLightPriceText(){
        this.cartBikeLightPrice.waitForDisplayed(30);
        return this.cartBikeLightPrice.getText();
    }

    isCartBikeLightRemoveButtonDisplay(){
        if(this.cartBikeLightRemoveBtn.isDisplayed()){
            return true;
        }else {
            return false;
        }
    }

    clickCheckOutButton(){
        this.checkOutBtn.click();
    }

    enterFirstName(keys){
        this.firstName.setValue(keys);
    }

    enterLastName(keys){
        this.lastName.setValue(keys);
    }

    enterZipCode(keys){
        this.zipCode.setValue(keys);
    }

    clickContinueButton(){
        this.continueBtn.click();
    }

    clickFinishButton(){
        this.finishBtn.click();
    }

    getOrderConfirmationText(){
        this.orderConfirmation.waitForDisplayed(30);
        return this.orderConfirmation.getText();
    }
}

module.exports = new Cart();
