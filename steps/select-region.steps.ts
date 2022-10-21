import { Given, Then, When } from "@wdio/cucumber-framework";
import { homePage } from "../data/home.page";
import { regionPage } from "../data/region.page";

When("I select {string},{string}", async (region: string, city: string) => {
  if (region !== "Україна") {
    await regionPage.changeLocationButton.click();
    await regionPage.regionDropDown.click();
    await regionPage.regionDropDownOption(region).click();
  }
  await regionPage.changeLocationButton.click();
  await regionPage.cityInput.setValue(city);
  await regionPage.firstCityOption.click();
});

Then("I should see selected {string},{string}",
  async (region: string, city: string) => {
    const actualCity = await regionPage.changeLocationButton.getText();
    expect(actualCity).toEqual(city);
  }
);
