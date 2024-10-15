
import { Page } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";


export default class LoginPage {
    private readonly usernameInputSelctor = "#username";
    private readonly passwordInputSelctor = "#password";
    private readonly loginBUttonSelector = "#Login";

    constructor(private page: Page) {

    }

    async navigateToLoginPage() {
        await this.page.goto("/")
        logger.info('Navigated to login.salesforce.com')
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInputSelctor).fill(username);
        logger.info('Filled username')
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelctor).fill(password);
        logger.info('Filled password')
    }

    async clickLoginButton() {
        await this.page
            .locator(this.loginBUttonSelector)
            .click()
            .catch((error) => {
                console.error(`Error clicking login button: ${error}`);
                throw error; //throw error if needed
            }).then(() => logger.info('clicked login button'))

            // page object chaining

            const homePage = new HomePage(this.page)
            return homePage;
    }
};