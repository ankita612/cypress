@CI @login @logout
Feature: User Login


  @smoke @trade_landing @ignore
  Scenario: Checking trade landing page
    Given I am on login page
    When I login with "tradelinkedtestuser@reece.com.au" and "Abcd1234"
    Then I should be on max myaccount home page
    And I logout





