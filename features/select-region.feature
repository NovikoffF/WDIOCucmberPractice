Feature: Select region
    Scenario Outline: Select region
        Given I am on the HomePage
        When I select "<region>","<city>"
        Then I should see selected "<region>","<city>"

        Examples:
            | region          | city        |
            | Україна         | Харків      |
            | Польща          | Wrocław     |
            | Велика Британія | London      |
            | США             | Los Angeles |