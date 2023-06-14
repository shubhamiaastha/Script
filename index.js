// const { data } = require("cheerio/lib/api/attributes");

const puppeteer = require('puppeteer')

async function app() {


    const browser = await puppeteer.launch({ headless: false });


    const page = await browser.newPage();

    await page.goto("https://sosv.com/portfolio/", { waitUntil: "domcontentloaded" })



    var ab = page.waitForSelector('#popmake-15098 > button', { deley: 4000 })
    // ab = document.querySelector(".pum-close.popmake-close")
    ab.click()

    // var el = await page.waitForXPath("//input[@name='input_1']")
    // await el.type("Demo of Page", { delay: 100 })

    // var e2 = await page.waitForXPath("//input[@name='input_3']")
    // await e2.type("sharma", { delay: 10 })

    // var e3 = await page.waitForXPath("//input[@name='input_5']")
    // await e3.type("Demo@gmail.com", { delay: 10 })

    // var clickButton = await page.waitForXPath("//input[@type='submit']")
    // clickButton.click('#gform_submit_button_18')
    // await page.click("#gform_submit_button_18")

    // await page.click("button.pum-close")


    var element = await page.waitForSelector(".filtered-listing__pagination > div > button")

    await page.waitForSelector(".filtered-listing__pagination > div > button")

    // for(var i = 1 ; i <10; i++){
    //     console.log(i)

    //     await page.click("button.facetwp-load-more", {delay : 4000} )    


    // }


    while (element) {


        await page.click("button.facetwp-load-more", { delay: 2000 })
    }








    //


    const datapage = await page.evaluate(() => {





        //    page.waitForSelector(".filtered-listing__pagination > .facetwp-type-pager >button", { delay: 3000 })
        //     var a = document.querySelectorAll('button.pum-close')
        //     a.close()





        const dataList = document.querySelectorAll(".filtered-listing__item");
        const datapage = Array.from(dataList).map((data) => {
            const name = data.querySelector('.filtered-listing__item-title').innerText;
            const Desc = data.querySelector('.filtered-listing__item-content').innerText;
            const Location = data.querySelector('.filtered-listing__item-locations').innerText;
            const Terms = data.querySelector('.filtered-listing__item-terms').innerText;

            return {
                name,
                Desc,
                Location,
                Terms,

            }



        })
        return datapage


    })






    console.log(datapage)

    await browser.close();
}
app()
