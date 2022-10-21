Feature: Search
    Scenario: scenario name
        Given I am on the HomePage
        When I search "IPhone 14"
        Then I should see result

    Scenario Outline: enter <value> in the search bar
        Given I am on the HomePage
        When I search "<value>"
        Then I should see result

        Examples:
            | value     |
            | IPhone 14 |
            | XBOX 360  |

