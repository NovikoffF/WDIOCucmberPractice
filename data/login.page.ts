import BasePage from "./base-page.page";

class LoginPage extends BasePage {
  get loginButton() {
    return $(".header_action_login>span");
  }
  get emailButton() {
    return $(".signin-with-ek");
  }
  get emailInput() {
    return $(".signin-name>input");
  }
  get passwordInput() {
    return $(".signin-password>input");
  }
  get submitButton() {
    return $('.signin button[type="submit"]');
  }
}

export const loginPage = new LoginPage();
