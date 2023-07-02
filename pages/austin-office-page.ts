import { Locator, Page } from "@playwright/test";
import locators from "../locators/austinOfficePage.json";

export class AustinOfficePage {
  readonly page: Page;
  readonly scheduleButton: Locator;
  readonly scheduleModalTitleText: Locator;
  readonly scheduleModalOpen: Locator;
  readonly scheduleModalCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scheduleButton = page.locator(locators.scheduleBtn);
    this.scheduleModalTitleText = page.locator(locators.scheduleModalTitleTxt);
    this.scheduleModalOpen = page.locator(locators.scheduleModalOpn);
    this.scheduleModalCloseButton = page.locator(
      locators.scheduleModalCloseBtn
    );
  }

  async urlAustinOfficePage() {
    await this.page.goto("/locations/austin/");
  }

  async clickOnButtonSchedule() {
    await this.scheduleButton.click();
  }

  async getModalTxt() {
    await this.scheduleModalTitleText.innerText();
  }

  async clickOnCloseButtonModal() {
    await this.scheduleModalCloseButton.click();
  }
}
