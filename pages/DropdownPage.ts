import { Page, Locator } from '@playwright/test';

export class DropdownPage {
  private page: Page;
  private dropdownMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdownMenu = page.locator('#dropdown');
  }

  async navigateTo() {
    await this.page.goto('/dropdown');
  }

  async selectOption(value: string) {
    await this.dropdownMenu.selectOption({ value: value });
  }
}
