export class PaymentPage{

    cardName = '[data-qa="name-on-card"]';
    cardNumber = '[data-qa="card-number"]';
    CVC = '[data-qa="cvc"]';
    expiryMonth = '[data-qa="expiry-month"]';
    expiryyear = '[data-qa="expiry-year"]';
    paymentButton = '[data-qa="pay-button"]';

    setCardName(name){
        cy.get(this.cardName).type(name);
    }

    setCardNumber(num){
      cy.get(this.cardNumber).type(num)
    }
    setCVC(cvc){
        cy.get(this.CVC).type(cvc);

    }
    setExpiryMonth(month){
        cy.get(this.expiryMonth).type(month);

    }
    setExpiryYear(year){
        cy.get(this.expiryyear).type(year);

    }
    clickpaymentButton(){
        cy.get(this.paymentButton).click();

    }

}