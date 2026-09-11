import { expect, test } from "@playwright/test";

test("homepage smoke: nav renders, contact validation shows on empty submit", async ({
  page,
}) => {
  await page.goto("/");

  // Nav is present
  await expect(
    page.getByRole("navigation", { name: "Primary" })
  ).toBeVisible();
  await expect(page.getByText("Dr. Maya Reynolds").first()).toBeVisible();

  // Hero h1
  await expect(
    page.getByRole("heading", { level: 1, name: /Therapy for anxiety/ })
  ).toBeVisible();

  // Contact section present — scroll to it
  await page.getByRole("heading", { name: /Start with a consultation/ }).scrollIntoViewIfNeeded();

  // Empty-submit should surface at least one validation error
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText(/Please enter your name/)).toBeVisible();
});
