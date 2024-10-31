import type { Page } from '@playwright/test';

export function getByAriaLabel(page: Page, selector: string) {
  return page.locator(`[aria-label="${selector}"]`);
}

export async function waitAriaLabel(page: Page, selector: string) {
  return page.waitForSelector(`[aria-label="${selector}"]`, { timeout: 15000 });
}

export function getInputByName(page: Page, name: string) {
  return page.locator(`input[name="${name}"]`);
}

export function getInputByValue(page: Page, value: string) {
  return page.locator(`input[value='${value}']`);
}
