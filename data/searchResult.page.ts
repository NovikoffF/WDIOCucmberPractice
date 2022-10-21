import BasePage from "./base-page.page";

class SearchResultPage extends BasePage {
  get searchTitle() {
    return $("#search_title");
  }
}

export const searchPage = new SearchResultPage();
