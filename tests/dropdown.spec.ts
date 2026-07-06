import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test.describe('Dropdown Functional Tests', () => {
  
  test('Should select an option from the dropdown menu', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    
    await dropdownPage.navigateTo();
    await dropdownPage.selectOption('1'); // Selects Option 1
    
    // Verify the option was correctly selected
    await expect(page.locator('#dropdown')).toHaveValue('1');
  });
});
