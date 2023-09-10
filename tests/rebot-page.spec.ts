import { test, expect } from '@playwright/test';

test('Should create new customer successfully', async ({ page }) => {
    await page.goto('https://robot-stage-1.firebaseapp.com/#/home');
    await page.getByRole('link', { name: 'สร้างข้อมูลผู้ใช้ใหม่' }).click();
});