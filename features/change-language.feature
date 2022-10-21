Feature: Change language
    Scenario Outline: Change language in the system
        Given I am on the HomePage
        When I change language to "<language>"
        Then I should see language changed to "<language>"
        Examples:
            | language |
            | en       |
            | ru       |
            | ua       |