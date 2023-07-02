import { test, expect } from "@playwright/test";
import { AustinOfficePage } from "../pages/austin-office-page";
import dataPage from "../resources/austinOfficeData.json";

test.describe("Austin Office Page tests", () => {
  let austinOfficePageDev: AustinOfficePage;

  test.beforeEach(async ({ page }) => {
    austinOfficePageDev = new AustinOfficePage(page);

    await austinOfficePageDev.urlAustinOfficePage();
  });

  test("First Test.", async () => {
    await austinOfficePageDev.clickOnButtonSchedule();
    const modalTxt = await austinOfficePageDev.getModalTxt();
    console.log("modalText", modalTxt);
    // await austinOfficePageDev.clickOnCloseButtonModal();
  });
});
