import { Given } from "cypress-cucumber-preprocessor/steps"

import GlobalActions from "../../support/scripts/GlobalActions"
import HomePage from "../../support/pages/HomePage"
import ProductPage from "../../support/pages/ProductPage"

import payload from "../../fixtures/busca_de_produto.json"

Given('I am in application', () => {
  cy.visit('/')
})

When('I search a real product and add to cart', () => {
  GlobalActions.searchAProduct(payload.products[0])
  HomePage.accessProduct()
})

Then('I should see a modal opening stating that the product has been added to the cart with its respective information', () => {
  ProductPage.addToCart()

  cy.get('#product').should('be.visible')
})

Then('I should see all products in the payment screen', () => {
  ProductPage.addToCart()
  cy.get('#product').should('be.visible')

  GlobalActions.accessPaymentScreen()
  cy.get('td:nth-child(2) > label').should('be.visible')
})