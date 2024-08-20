export default new class GlobalActions {
  searchAProduct(product){
    cy.get('#search > a').click()
    cy.get('#autoComplete').type(`${product} {enter}`)
    cy.get('.viewAll').click()
  }

  accessPaymentScreen(){
    cy.get('#menuCart').click()
  }
}