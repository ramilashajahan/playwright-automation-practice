import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Functional Tests', () => {
  
  test('Should successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigateTo();
    await loginPage.login('practice', 'SuperSecretPassword!');
    
    // Simple, realistic assertion to verify successful login message
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toBeVisible();
    await expect(flashMessage).toContainText('You logged into a secure area!');
  });
});
