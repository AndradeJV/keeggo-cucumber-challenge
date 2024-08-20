export default new class HomePage {
  accessProduct(){
    cy.get('li:nth-child(1) .AddToCard').click()
  }
}