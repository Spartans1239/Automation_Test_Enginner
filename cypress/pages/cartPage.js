export class CartPage{
    addProduct = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn'
    ContinueShopping = '.modal-footer > .btn';
    cartButton = '.shop-menu > .nav > :nth-child(3) > a';
    ProceedtoCheckoutbutton = '.col-sm-6 > .btn';
    Placeorder = ':nth-child(7) > .btn';
    
    addtoCart(){
        cy.get(this.addProduct).click();
    }
    clickContinueShopping(){
        cy.get(this.ContinueShopping).click();
    }
    clickCartbutton(){
        cy.get(this.cartButton).click();
    }
    clickProceedtoCheckout(){
        cy.get(this.ProceedtoCheckoutbutton).click();
    }

    clickPlaceorder(){
        cy.get(this.Placeorder).click();
    }
}