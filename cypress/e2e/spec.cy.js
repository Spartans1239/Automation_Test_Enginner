/// <reference types = "cypress" />
import { slowCypressDown } from "cypress-slow-down";
import {SignupPage} from '../pages/signupPage'
import {CartPage} from '../pages/cartPage';
import { PaymentPage } from '../pages/paymentPage'
slowCypressDown(500);

const signupPage = new SignupPage();
const cart = new CartPage();
const payment = new PaymentPage();

describe('POM', () => {
  it('Automation test Enginner', () => {
    
    signupPage.navigate('https://automationexercise.com/');
    signupPage.signUp();
    signupPage.clickCreateAccount();

    cart.addtoCart();
    cart.clickContinueShopping();
    cart.clickCartbutton();
    cart.clickProceedtoCheckout();
    cart.clickPlaceorder();

    payment.setCardName('riasat');
    payment.setCardNumber('1234');
    payment.setCVC(311);
    payment.setExpiryMonth(12);
    payment.setExpiryYear(2030);
    payment.clickpaymentButton();


  })
})