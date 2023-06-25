describe("Github page tests", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 70000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 70000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 70000);
});
describe("Check headers Github", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/account/organizations");
  });

  afterEach(() => {
    page.close();
  });

  test("The h2 header content'", async () => {
    const link = await page.$(
      "body > div.logged-in.env-production.page-responsive > h1"
    );
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("Sign in to GitHub · GitHub");
  }, 70000);

  test("enter email", async () => {
    const emailEnter = 'input[type="text"]';
    await page.type(emailEnter, "email@gmail.com", { delay: 200 }, 70000);
  });

  test("Forgot my password", async () => {
    const firstLink = await page.$(
      "#login > div.auth-form-body.mt-3 > form > div > a"
    );
    await firstLink.click();
    await page.waitForSelector("a");
    const title2 = await page.title();
    expect(title2).toEqual("Forgot your password? · GitHub");
  }, 70000);
});
