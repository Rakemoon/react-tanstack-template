import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should have title equivalent to React Tanstack Template", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/React Tanstack Template/);
  });

  test("should render home page correctly", async ({ page }) => {
    await page.goto("/");

    // Check for main title
    await expect(page.locator("text=Reusable Template~")).toBeVisible();

    // Check for buttons
    await expect(page.locator("text=Add 0")).toBeVisible();
    await expect(page.locator("text=Sub 0")).toBeVisible();

    // Check for Vite and React logos
    await expect(page.locator("img[alt='vite-logo']")).toBeVisible();
    await expect(page.locator("img[alt='react-logo']")).toBeVisible();

    // Check for Cirno
    await expect(page.locator("main>div:first-child")).toBeVisible();
  });

  test("should increment and decrement the count", async ({ page }) => {
    await page.goto("/");

    const addButton = page.locator("text=Add 0");

    await addButton.click();
    await expect(page.locator("text=Add 1")).toBeVisible();
    await expect(page.locator("text=Sub 1")).toBeVisible();

    const subButton = page.locator("text=Sub 1");

    await subButton.click();
    await expect(page.locator("text=Add 0")).toBeVisible();
    await expect(page.locator("text=Sub 0")).toBeVisible();
  });

  test("should not decrement below zero", async ({ page }) => {
    await page.goto("/");
    const subButton = page.locator("text=Sub 0");
    await subButton.click();
    await expect(page.locator("text=Add 0")).toBeVisible();
    await expect(page.locator("text=Sub 0")).toBeVisible();
  });

  test("should increment and decrement multiple times", async ({ page }) => {
    await page.goto("/");
    let addButton = page.locator("text=Add 0");
    let subButton = page.locator("text=Sub 0");

    for (let index = 1; index <= 5; ++index) {
      await addButton.click();
      addButton = page.locator(`text=Add ${index}`);
      subButton = page.locator(`text=Sub ${index}`);

      await expect(addButton).toBeVisible();
      await expect(subButton).toBeVisible();
    }

    for (let index = 4; index >= 0; --index) {
      await subButton.click();
      addButton = page.locator(`text=Add ${index}`);
      subButton = page.locator(`text=Sub ${index}`);

      await expect(addButton).toBeVisible();
      await expect(subButton).toBeVisible();
    }
  });

  test("should ensure button rotation classes exist", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(String.raw`button.rotate-1\.5`)).toBeVisible();
    await expect(page.locator("button.rotate-2")).toBeVisible();
  });

  test("should ensure image elements have correct class", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("img.size-20")).toHaveCount(2);
  });

  test("should check that text within borders exist", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Edit src/routes.index.tsx")).toBeVisible();
    await expect(
      page.locator("text=React + Vite + Tanstack + Opinionated Eslint"),
    ).toBeVisible();
  });
});
