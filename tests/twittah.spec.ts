import {test} from '@playwright/test'
import {LoginPage} from "../pom/login.page";
import {invalidUser, suspendedUser, users} from "../fixtures/users";
import {HomePage} from "../pom/home.page";

test.describe('Login Page', () => {
    test('Should create post successfully', async ({page}) => {
        const loginPage = new LoginPage(page)

        await loginPage.visit()
        await loginPage.loginWith(users)

        const homepage = new HomePage(page)
        await homepage.shouldBeDisplayed();

        await homepage.logout();
    })

    for (const user of invalidUser) {
        test(`Should login failed when login as inactive user with ${user.displayName}`, async ({page}) => {
            const loginPage = new LoginPage(page)

            await loginPage.visit()
            await loginPage.loginWith(user)

            await loginPage.shouldShowErrorMessage("ล็อกอินหรือรหัสผ่านไม่ถูกต้อง")
        })
    }

    for (const user of suspendedUser) {
        test(`Should login failed when login as suspended user  ${user.displayName}`, async ({page}) => {
            const loginPage = new LoginPage(page)

            await loginPage.visit()
            await loginPage.loginWith(user)

            await loginPage.shouldShowErrorMessage("ล็อกอินถูกระงับ")
        })
    }

})
