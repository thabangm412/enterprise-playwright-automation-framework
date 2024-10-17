// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encryptEnvFile } from "../utils/EncryptEnvFile";
import { decrypt } from "../utils/CryptojsUtil";
import HomePage from "../pages/HomePage";
 

test("test: login", async ({page, browserName}) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    // await loginPage.fillUsername("thabang@testsolutions.sandbox");
    // await loginPage.fillPassword("CNSPass6029");
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectHomeitleToBeVisible();
    //await page.screenshot({ path: `homepage-`+browserName+`.png`, fullPage: true });
     
});

test("test: contacts navigation", async ({page, browserName}) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    await loginPage.clickLoginButton();
    await homePage.expectHomeitleToBeVisible();

    await homePage.navigateToContactsTab();
     
});

 