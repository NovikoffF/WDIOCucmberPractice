import { Given, Then, When } from "@wdio/cucumber-framework";
import { homePage } from "../data/home.page";

When("I change language to {string}", async (language: string) => {
  await homePage.getLanguageLink(language).click();
  await browser.pause(5000);
});

Then("I should see language changed to {string}", async (language: string) => {
  const searchTextLocalization = {
    en: "Search",
    ua: "Знайти",
    ru: "Найти",
  };
  await expect(homePage.searchButton).toHaveText(
    searchTextLocalization[language]
  );
});
