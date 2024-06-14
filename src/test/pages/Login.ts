/**
 * There are other flows in the Login page such as:
 * 1. Sign in via IdP (Identity Provider)
 * 2. Sign up new account
 * 3. Forgot password
 * 
 * I'll focus on "Sign In" flow with credentials for this assignment
 * with the test user assumed to be already created.
 */


import { expect, Page } from '@playwright/test';
import PageObjectHelpers from './helper/PageObjectHelpers';

export class LoginPage {
    private base: PageObjectHelpers

    constructor(private page: Page) {
        this.base = new PageObjectHelpers(page);
    }

    private Elements = {
        usernameField: "input#email",
        passwordField: "input#password",
        loginBtn: "//button[contains(text(), 'Sign in')]"
    }

    async enterUsername(username: string) {
        await this.base.waitAndInput(this.Elements.usernameField, username);
    }
    
    async enterPassword(password: string) {
        await this.base.waitAndInput(this.Elements.passwordField, password);
    }

    async clickLoginBtn() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    async enterLoginCreds(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    async navigate() {
        await this.base.goto('https://app.leonardo.ai/auth/login');
    }

}
