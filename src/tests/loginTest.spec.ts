// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encryptEnvFile } from "../utils/EncryptEnvFile";
import { decrypt } from "../utils/CryptojsUtil";
 

test("test", async ({page, browserName}) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    // await loginPage.fillUsername("thabang@testsolutions.sandbox");
    // await loginPage.fillPassword("CNSPass6029");
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
    await page.screenshot({ path: `homepage-`+browserName+`.png`, fullPage: true });
     
});

// test("Sample env test", async ({page}) => {

//     console.log(process.env.NODE_ENV);
//     console.log(process.env.userid);
//     console.log(process.env.password);

// });

// test("Sample env test", async ({page}) => {

//     encryptEnvFile();
// });