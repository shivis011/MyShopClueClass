#Shivani
Feature: Product addet to cart

  @Regression
  Scenario: Add Products to Add to Cart
    Given user is on ShopClues Home Page
    When user clicks on Dont Allow on pop up
    When user hovers on Home & Kitchen section and clicks on Curtains
    And user selects the first product in the Curtains section 
    And user clicks on Add to Cart 
    Then user must get the message product added to cart

 