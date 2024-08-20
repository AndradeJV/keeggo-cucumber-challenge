import { Given } from "cypress-cucumber-preprocessor/steps"

import GlobalActions from "../../support/scripts/GlobalActions"
import HomePage from "../../support/pages/HomePage"

import payload from "../../fixtures/inclusao_de_produto_no_carrinho.json"

Given('I am in application', () => {
  cy.visit('/')
})

When('I click for search a product and insert the name of product and get an enter', () => {
  GlobalActions.searchAProduct(payload.products[0])
  HomePage.accessProduct()
})

Then('I should see a modal opening stating that the product has been added to the cart with its respective information', () => {
  cy.get('.noPromotedProductDiv >div >div >div:nth-child(2) ul li:nth-child(1)').should('be.visible')
})