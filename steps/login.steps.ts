import { Given, Then, When } from "@wdio/cucumber-framework";
import { homePage } from "../data/home.page";
import { loginPage } from "../data/login.page";

When("I Log in with correct credentials", async () => {
  await loginPage.loginButton.click();
  await loginPage.emailButton.click();
  await loginPage.emailInput.setValue("figel86433@inkmoto.com");
  await loginPage.passwordInput.setValue("qwerty123456");
  await loginPage.submitButton.click();
});

Then("I should see log in complete", async () => {
  await expect(homePage.userNameLink).toHaveText("Cucumber");
});
