import { Locator, Page } from "@playwright/test";
import locators from "../locators/austinOfficePage.json";

export class AustinOfficePage {
  readonly page: Page;
  readonly scheduleButton: Locator;
  readonly scheduleModalTitleText: Locator;
  readonly scheduleModalOpen: Locator;
  readonly scheduleModalClosed: Locator;
  readonly scheduleModalCloseButton: Locator;
  readonly gmailIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scheduleButton = page.locator(locators.scheduleBtn);
    this.scheduleModalOpen = page.locator(locators.scheduleModalOpn);
    this.scheduleModalClosed = page.locator(locators.scheduleModalClos);
    this.scheduleModalCloseButton = page.locator(
      locators.scheduleModalCloseBtn
    );
    this.gmailIcon = page.getByRole("button", { name: locators.gmailIcon });
  }

  async urlAustinOfficePage() {
    await this.page.goto("/locations/austin/");
  }

  async clickOnButtonSchedule() {
    await this.scheduleButton.click();
  }

  async clickOnCloseButtonModal() {
    await this.scheduleModalCloseButton.click();
  }
}
