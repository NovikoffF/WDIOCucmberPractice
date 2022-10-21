import { Given, Then, When } from "@wdio/cucumber-framework";
import { homePage } from "../data/home.page";
import { searchPage } from "../data/searchResult.page";

When("I search {string}", async (value: string) => {
  await homePage.searchInput.setValue(value);
  await (await homePage.searchButton).click();
});
Given("I am on the HomePage", async () => {
  await homePage.open();
});
Then("I should see result", async () => {
  const label = await searchPage.searchTitle.getText();
  const res = +label.replace(/\D+/g, "");
  expect(res).toBeGreaterThan(0);

  await browser.pause(5000);
});
