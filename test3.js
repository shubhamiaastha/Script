const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData() {
  const baseUrl = 'https://sosv.com/portfolio/';
  const startingPage = 1;
  let currentPage = startingPage;
  let hasNextPage = true;

  while (hasNextPage) {
    const url = `${baseUrl}?page=${currentPage}`;

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Here, you can use the jQuery-like syntax of Cheerio to extract the desired data
    // For example, let's extract the names of companies on each page

    const companyNames = [];
    $('.filtered-listing__item-title').each((index, element) => {
      const companyName = $(element).text();
      companyNames.push(companyName);
    });

    console.log('Page', currentPage, 'Company Names:', companyNames);

    // Check if there is a next page button available
    const nextPageButton = $('.filtered-listing__pagination > div > button');

    if (nextPageButton.length > 0) {
      currentPage++;
    } else {
      hasNextPage = false;
    }
  }
}

scrapeData().catch(error => {
  console.error('Error:', error);
});
