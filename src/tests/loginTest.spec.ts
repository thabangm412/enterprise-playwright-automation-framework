// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
 

test("test", async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("thabang@testsolutions.sandbox");
    await loginPage.fillPassword("CNSPass6029");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();

});