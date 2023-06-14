const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const baseUrl = 'https://sosv.com/portfolio/';
  const startingPage = 1;
  let currentPage = startingPage;
  let hasNextPage = true;

  while (hasNextPage) {
    const url = `${baseUrl}?page=${currentPage}`;

    await page.goto(url);

    // Here, you can use Puppeteer's methods to extract the desired data
    // For example, let's extract the names of companies on each page

    const companyNames = await page.$$eval('.filtered-listing__item-title', elements => {
      return elements.map(element => element.innerText);
    });

    console.log('Page', currentPage, 'Company Names:', companyNames);

    // Check if there is a next page button available
    const nextButton = await page.$('.filtered-listing__pagination > .facetwp-facet > .facetwp-load-more');
    hasNextPage = nextButton !== null;

    if (hasNextPage) {
      currentPage++;
      await nextButton.click('');
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }
  }

  await browser.close();
}

scrapeData().catch(error => {
  console.error('Error:', error);
});
