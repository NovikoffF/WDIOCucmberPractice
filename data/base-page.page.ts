/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {
  async open(path: string = "https://ek.ua") {
    await browser.url(path);
  }

  get searchInput() {
    return $("#ek-search");
  }
  get searchButton() {
    return $(".header_search_btn-submit>button");
  }
  getLanguageLink(language: string) {
    return $(`.header_lang>a[data-lang="${language}"]`);
  }
}
