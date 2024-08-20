Feature: Realizar busca de produto

  I want to search products
  
  @focus
  Scenario: realizar busca com sucesso de um produto existente
    Given I am in application
    When I click for search a product and insert the name of product and get an enter
    Then I should see the products searched on the screen