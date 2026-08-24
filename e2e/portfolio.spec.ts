import { test, expect } from "@playwright/test";

test.describe("Portfolio homepage", () => {
  test("loads hero with open to work badge and correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".hero-title")).toContainText("chegam à produção");
    await expect(page.locator(".open-to-work-badge")).toContainText(
      "DISPONÍVEL PARA NOVAS OPORTUNIDADES"
    );
  });

  test("navigation includes new sections", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await expect(page.locator('.nav-menu a[href="#ai-projects"]')).toBeVisible();
    await expect(page.locator('.nav-menu a[href="/blog"]')).toBeVisible();
  });

  test("open source section lists GitHub projects", async ({ page }) => {
    await page.goto("/#open-source");
    await expect(page.locator("#open-source")).toBeVisible();
    await expect(page.locator("#open-source")).toContainText("ai-resume-analyzer");
  });

  test("certifications section is visible", async ({ page }) => {
    await page.goto("/#certifications");
    await expect(page.locator("#certifications")).toContainText("UniFacema");
  });

  test("blog preview links to articles", async ({ page }) => {
    await page.goto("/#blog-preview");
    await expect(page.locator("#blog-preview a")).toContainText(["Ler artigo"]);
  });

  test("availability includes scheduling link", async ({ page }) => {
    await page.goto("/#availability");
    await expect(page.locator("#availability")).toContainText("Marcar horário");
  });

  test("contact form has visible labels", async ({ page }) => {
    await page.goto("/#contact");
    await expect(page.locator('label[for="name"]')).toBeVisible();
  });

  test("footer shows 2026 copyright", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".footer")).toContainText("2026");
  });

  test("ai demos section is visible", async ({ page }) => {
    await page.goto("/#ai-demos");
    await expect(page.locator("#ai-demos")).toContainText("AI Resume Analyzer");
  });

  test("testimonials section links to LinkedIn", async ({ page }) => {
    await page.goto("/#testimonials");
    await expect(page.locator("#testimonials")).toContainText("Grupo Abril");
    await expect(page.locator('#testimonials a[href*="linkedin"]')).toBeVisible();
  });
});

test.describe("Auxiliary pages", () => {
  test("blog index and article pages load", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toContainText("Blog Técnico");
    await page.goto("/blog/react-native-offline-first");
    await expect(page.locator("h1")).toContainText("offline-first");
  });

  test("servicos page loads", async ({ page }) => {
    await page.goto("/servicos");
    await expect(page.locator("h1")).toContainText("Solunorde");
  });

  test("curriculo page loads with Contali", async ({ page }) => {
    await page.goto("/curriculo");
    await expect(page.locator("body")).toContainText("Contali");
    await expect(page.locator("body")).toContainText("Grupo Abril");
    await expect(page.locator(".cv-actions")).toBeVisible();
  });

  test("curriculo offers ATS text download", async ({ page }) => {
    await page.goto("/curriculo");
    await expect(page.locator('a[href="/natan-cv-ats.txt"]')).toBeVisible();
  });

  test("curriculo print view hides action buttons", async ({ page }) => {
    await page.goto("/curriculo");
    await page.emulateMedia({ media: "print" });
    await expect(page.locator(".cv-actions")).toBeHidden();
  });
});

test.describe("Assets and branding", () => {
  test("favicon assets are available", async ({ request }) => {
    for (const path of [
      "/favicon.ico",
      "/favicon-32x32.png",
      "/apple-touch-icon.png",
    ]) {
      const response = await request.get(path);
      expect(response.ok(), `${path} should return 200`).toBeTruthy();
    }
  });

  test("header avatar matches profile photo asset", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".nav-brand-avatar")).toHaveAttribute(
      "src",
      /profile-photo\.jpeg/
    );
  });

  test("cv pdf is available for download", async ({ request }) => {
    const response = await request.get("/natan-cv.pdf");
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("pdf");
    const body = await response.body();
    expect(body.byteLength).toBeGreaterThan(10_000);
    expect(body.subarray(0, 4).toString()).toBe("%PDF");
  });
});

test.describe("SEO metadata", () => {
  test("meta description mentions 7+ years", async ({ page }) => {
    await page.goto("/");
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toContain("7+");
  });
});
