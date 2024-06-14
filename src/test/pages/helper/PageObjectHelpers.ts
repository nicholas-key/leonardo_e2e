import { Page } from "@playwright/test";

export default class PageObjectHelpers {

    constructor(private page: Page) { }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async waitAndInput(locator: string, inputStr: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.fill(inputStr);
    }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }
}