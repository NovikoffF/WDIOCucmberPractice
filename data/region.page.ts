import BasePage from "./base-page.page";

class RegionPage extends BasePage {
  get changeLocationButton() {
    return $(".header_action_change-city em");
  }
  regionDropDownOption(region: string) {
    return $(`//a[@class="option" and contains(text(), "${region}")]`);
  }
  get regionDropDown() {
    return $(".lf-text");
  }
  get cityInput() {
    return $(".rs-inp");
  }
  get firstCityOption() {
    return $(".city");
  }
}
export const regionPage = new RegionPage();
