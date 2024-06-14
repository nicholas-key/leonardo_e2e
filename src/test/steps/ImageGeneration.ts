import { expect, chromium, Page, Browser } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { ImageGenerationPage } from '../pages/ImageGeneration';
import { LoginPage } from '../pages/Login';

setDefaultTimeout(60 * 1000 * 299)

let imageGenerationPage: ImageGenerationPage;
let loginPage: LoginPage;

let page: Page;
let browser: Browser;

Given('a logged in user', async () => {

    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterLoginCreds('<leonardo_ai_acct_username>', '<leonardo_ai_acct_password>');
    await page.waitForURL('https://app.leonardo.ai/');
    expect(page.locator('[aria-label="Image Generation"]'));
});

Given('the Image Generation page', async () => {
    imageGenerationPage = new ImageGenerationPage(page);
    await imageGenerationPage.closeModalLandingPage();
    await imageGenerationPage.clickImageGeneration();
    await imageGenerationPage.closeModalImageGeneration();
});

Given('the "Leonardo Lightning XL" model', async () => {
    return 'pending';
});

Given('Alchemy turned off', async () => {
    return 'pending';
});

Given('a prompt of "a successful end to end test"', async () => {
    return 'pending';
});

Given('image dimensions of 512 x 512', async () => {
    return 'pending';
});

Given('Number of Images is 1', async () => {
    return 'pending';
});

When('the generate button is clicked', async () => {
    return 'pending';
});

Then('the generated image displays successfully', async () => {
    return 'pending';
});
