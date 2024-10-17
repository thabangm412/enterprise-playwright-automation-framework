import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import { error } from "console";


export default class HomePage {

    private readonly homeTitleLocator = "Home";
    private readonly setupTabLocator = "div[class='slds-icon-waffle']";
    private readonly serviceLinkeLocator = "p.slds-truncate";
    private readonly serviceTitleLocator = "Service";
    private readonly contactsTitleLocator = "Contacts";
    private readonly myContactsTitleLocator = "My Contacts"

    constructor(private page: Page) {

    }

    async expectHomeitleToBeVisible() {
        await expect(this.page.getByTitle(this.homeTitleLocator))
        .toBeVisible({timeout: 15000,
        }).catch((error) => {
            logger.error(`Error clicking login button: ${error}`);
            throw error; // rethrow error if needed
        }).then(() =>logger.info('Home Title is visible'));
    }

    async navigateToContactsTab() {

        await this.page.locator(this.setupTabLocator).click();
        logger.info('Setup tab opened')
        await this.page.locator(this.serviceLinkeLocator).first().click();
        logger.info('Service link clicked')

        await expect(this.page.getByTitle(this.serviceTitleLocator))
        .toBeVisible({timeout: 15000,
        }).catch((error) => {
            logger.error(`Error clicking service button: ${error}`);
            throw error;
        }).then(() => logger.info('Service Title is visible'));

        await this.page.getByTitle(this.contactsTitleLocator).click();
        logger.info('Opening contacts page')

        // Listen for any dialog pop-up
        this.page.on('dialog', async (dialog) => {
            // Check if the dialog type is an alert
            if (dialog.type() === 'alert') {
                console.log('Alert message:', dialog.message()); // Log the alert message (optional)
                await dialog.dismiss(); // Dismiss the alert
            }
        });

        await expect(this.page.getByTitle(this.myContactsTitleLocator))
        .toBeVisible({timeout: 15000,
        }).catch((error) => {
            logger.error(`Error clicking contacts button: ${error}`);
            throw error;
        }).then(() => logger.info('My Contacts Title is visible'));
    }

    async createContact() {
        await expect(this.page.getByTitle(this.homeTitleLocator))
        .toBeVisible({timeout: 15000,
        }).catch((error) => {
            logger.error(`Error clicking login button: ${error}`);
            throw error; // rethrow error if needed
        }).then(() =>logger.info('Home Title is visible'));
    }
}