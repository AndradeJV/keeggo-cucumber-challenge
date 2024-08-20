export default new class ProductPage {
  addToCart(){
    cy.get('button[name="save_to_cart"]').click()
  }
}