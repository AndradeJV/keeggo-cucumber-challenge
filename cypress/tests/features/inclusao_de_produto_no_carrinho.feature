Feature: Inclusão de produto no carrinho

  I want to include products in the cart
  
  @focus
  Scenario: incluir produto no carrinho
    Given I am in application
    When I search a real product and add to cart
    Then I should see a modal opening stating that the product has been added to the cart with its respective information

  @focus
  Scenario: validar os produtos incluídos no carrinho na tela de pagamento.
    Given I am in application
    When I search a real product and add to cart
    Then I should see all products in the payment screen