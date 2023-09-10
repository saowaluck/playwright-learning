import {expect, Locator, Page} from "@playwright/test";
import {app} from "../fixtures/app";
import {User} from "../interfaces/user";

export class LoginPage {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _loginField: Locator
    readonly _passwordField: Locator
    readonly _loginButton: Locator
    readonly _errorMessageLabel: Locator
    readonly _appName: Locator

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/`;
        this._loginField = page.getByTestId("login-field")
        this._passwordField = page.getByTestId("password-field")
        this._loginButton = page.getByTestId("login-button")
        this._errorMessageLabel = page.getByTestId("error-message")
        this._appName = page.getByTestId("app-name")
    }

    async visit() {
        await this._page.goto(this._pageUrl)
    }

    async loginWith(user: User) {
        await this._loginField.fill(user.credential.username)
        await this._passwordField.fill(user.credential.password)
        await this._loginButton.click()
    }

    async shouldShowErrorMessage(errorMessage: string) {
        await expect(this._errorMessageLabel).toHaveText(errorMessage)
    }
}