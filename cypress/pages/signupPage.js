export class SignupPage {
   
   SignupLoginButton = '.shop-menu > .nav > :nth-child(4) > a';
   SignupButton = '[data-qa="signup-button"]';
   signupName = '[data-qa="signup-name"]';
   signupEmail = '[data-qa="signup-email"]';
   gender = '#id_gender1';
   password = '[data-qa="password"]';
   day = '[data-qa="days"]';
   month = '[data-qa="months"]';
   year = '[data-qa="years"]';
   firstname = '[data-qa="first_name"]';
   lastname = '[data-qa="last_name"]';
   company = '[data-qa="company"]';
   address1 = '[data-qa="address"]';
   address2 = '[data-qa="address2"]';
   country = '[data-qa="country"]';
   state = '[data-qa="state"]';
   city = '[data-qa="city"]';
   zipCode = '[data-qa="zipcode"]';
   mobileNumber = '[data-qa="mobile_number"]';
   createaccountButton = '[data-qa="create-account"]';
   continuebutton = '[data-qa="continue-button"]';

   navigate(url) {
       cy.visit(url);
   }

   signUp() {
       this.clickSignupLoginButton();
       this.setSignupName('riasat');
       this.setSignupEmail('riasat768@gmail.com');
       this.clickSignupButton();
       this.chooseGender();
       this.setPassword('1234');
       this.setDay(27);
       this.setMonth('January');
       this.setYear('2000');
       this.setFirstName('Riasat');
       this.setLastName('Haque');
       this.setCompany('W3 Engineer Ltd');
       this.setAddress1('Mirpur DOHS');
       this.setAddress2('Narail');
       this.setCountry('United States');
       this.setState('California');
       this.setCity('Los Angeles');
       this.setZipCode(90001);
       this.setMobileNumber(101923984993);
   }

   clickSignupLoginButton() {
       cy.get(this.SignupLoginButton).click();
   }

   setSignupName(name) {
       cy.get(this.signupName).type(name);
   }

   setSignupEmail(email) {
       cy.get(this.signupEmail).type(email);
   }

   clickSignupButton() {
       cy.get(this.SignupButton).click();
   }

   chooseGender() {
       cy.get(this.gender).click();
   }

   setPassword(password) {
       cy.get(this.password).type(password);
   }

   setDay(day) {
       cy.get(this.day).select(day);
   }

   setMonth(month) {
       cy.get(this.month).select(month);
   }

   setYear(year) {
       cy.get(this.year).select(year);
   }

   setFirstName(firstName) {
       cy.get(this.firstname).type(firstName);
   }

   setLastName(lastName) {
       cy.get(this.lastname).type(lastName);
   }

   setCompany(company) {
       cy.get(this.company).type(company);
   }

   setAddress1(address) {
       cy.get(this.address1).type(address);
   }

   setAddress2(address) {
       cy.get(this.address2).type(address);
   }

   setCountry(country) {
       cy.get(this.country).select(country);
   }

   setState(state) {
       cy.get(this.state).type(state);
   }

   setCity(city) {
       cy.get(this.city).type(city);
   }

   setZipCode(zipCode) {
       cy.get(this.zipCode).type(zipCode);
   }

   setMobileNumber(mobileNumber) {
       cy.get(this.mobileNumber).type(mobileNumber);
   }

   clickCreateAccount() {
       cy.get(this.createaccountButton).click();
       cy.get(this.continuebutton).click();
   }
}
