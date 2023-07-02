import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import dataHome from "../resources/decemberLabsData.json";

test.describe("Home Page tests", () => {
  let homePageDev: HomePage;

  test.beforeEach(async ({ page }) => {
    homePageDev = new HomePage(page);

    await homePageDev.urlHomePage();
  });

  test("First Test.", async () => {
    await expect(homePageDev.page).toHaveTitle(dataHome.homeTitleTxt);
    await expect(homePageDev.navigationMenu).toBeVisible();
    await homePageDev.clickOnAustinOffice();
    expect(homePageDev.page).toHaveURL(dataHome.austinPageUrl);
  });
});
