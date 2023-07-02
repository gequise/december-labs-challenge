import { Locator, Page } from "@playwright/test";
import locators from "../locators/decemberLabsPage.json";

export class HomePage {
  readonly page: Page;
  readonly navigationMenu: Locator;
  readonly austinOfficeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationMenu = page.locator(locators.navigationMenu);
    this.austinOfficeLink = page.getByRole("link", {
      name: locators.austinOffice,
    });
  }

  async urlHomePage() {
    await this.page.goto("/");
  }

  async clickOnAustinOffice() {
    await this.austinOfficeLink.click();
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForLoadState("networkidle");
  }
}
