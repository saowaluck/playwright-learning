import {expect, Locator, Page} from "@playwright/test";

export class HomePage {
    readonly _page: Page;
    readonly _displayName: Locator;
    readonly _logoutButton: Locator;

    constructor(page: Page) {
        this._page = page;
        this._displayName = page.getByTestId("user-profile-display-name")
        this._logoutButton = page.getByTestId("menu-signout")
    }

    async shouldBeDisplayed() {
        await expect(this._displayName).toBeVisible()
    }

    async logout(){
        await this._logoutButton.click();
    }
}