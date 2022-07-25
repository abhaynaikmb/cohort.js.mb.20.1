/// <reference types="cypress" />



describe('testing functionality of flipkart webpage', () => {
  beforeEach(() => {
  cy.visit('https://www.flipkart.com/')
  })


  it('login', () => {

    cy.get('._1_3w1N').should('exist').click()
    cy.get(':nth-child(1) > ._2IX_2-').type('9483171155')
    cy.get(':nth-child(2) > ._2IX_2-').type('1122334455')
    cy.get('._1D1L_j > ._2KpZ6l').click()

   })

   it('scroll',() => {
    cy.scrollTo('bottom')
   })
   it('search phone',() => {
    cy.get('._3704LK').type('iphone 12')
    cy.get('.L0Z3Pu > svg').click()
    cy.visit('https://www.flipkart.com/apple-iphone-12-blue-128-gb/p/itm02853ae92e90a?pid=MOBFWBYZKPTZF9VG&lid=LSTMOBFWBYZKPTZF9VGJD5AMO&marketplace=FLIPKART&q=iphone+12&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=5fad58ce-6d28-424c-b8d2-ea60d4685f04.MOBFWBYZKPTZF9VG.SEARCH&ppt=hp&ppn=homepage&ssid=4vpn1b7cio0000001658747096245&qH=7b7504afcaf2e1ea')
   })

   it("add to cart",() =>
   {
  cy.get('_2KpZ6l _2U9uOA _3v1-ww').click()
   })

})