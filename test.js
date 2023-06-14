const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const baseUrl = 'https://sosv.com/portfolio/'; // Replace with the base URL of the website
  const startingPage = 1;
  let currentPage = startingPage;
  let hasNextPage = true;

  while (hasNextPage) {
    const url = `${baseUrl}`;

    await page.goto(url);

    // Here, you can use Puppeteer's methods to extract the desired data
    // For example, let's extract the titles of items on each page

    const itemTitles = await page.$$eval('.filtered-listing__item-title', elements => {
      return elements.map(element => element.innerText);
    });

    console.log('Page', currentPage, 'Item Titles:', itemTitles);

    // Check if there is a next page button available
    const nextButton = await page.$('');
    hasNextPage = nextButton !== null;

    if (hasNextPage) {
      currentPage++;
      await nextButton.click();
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }
  }

  await browser.close();
}

scrapeData().catch(error => {
  console.error('Error:', error);
});
