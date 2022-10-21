import BasePage from "./base-page.page";

class HomePage extends BasePage {
  get userNameLink() {
    return $(".info-nick");
  }
}

export const homePage = new HomePage();
