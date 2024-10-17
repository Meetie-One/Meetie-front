import { test, expect } from "@playwright/test";

test.describe("커뮤니티 리스트 페이지", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/community");
    await page.waitForURL(`**/community`);

    await expect(page).toHaveURL("/community");
  });

  test("게시글 검색 후 클릭 시 게시글 페이지로 이동", async ({ page }) => {
    await page.getByTestId("searchSheetOpen").click();

    await expect(page.getByTestId("searchButton")).toBeVisible();

    await page.getByTestId("searchInput").fill("영화");

    await page.getByTestId("searchButton").click();

    await page.getByText("영화").click();

    await expect(page.getByRole("heading", { name: "영화 추천해주세요" })).toBeVisible();
  });

  test("태그 필터링 후 클릭 시 게시글 페이지로 이동", async ({ page }) => {
    await page.getByText("스포츠").nth(0).click();

    await page.getByText("스포츠").nth(2).click();

    await expect(page.getByRole("heading", { name: "맨시티 vs 아스널" })).toBeVisible();
  });
});
