// await page.waitForSelector(".filtered-listing__pagination > .facetwp-type-pager >button ")

    // const popupElement = await page.$('#pum-15098',{delay:1000}); 

    // await popupElement.click('#popmake-15098 > button');
    // // await popupElement.type('.input-field', 'Text to enter');
    // await page.click(".facetwp-load-more",{delay :60000})

    //...................................................................................

    // const popupElement = await page.$('#pum-15098',{delay:2000});
    //  await popupElement.click('#popmake-15098 > button');
    // if (popupElement && popupElement.parentNode) {
    //     popupElement.parentNode.removeChild(popupElement);
    // }


    // .....................................................................................

    const popupElement = await page.$('.filtered-listing__pagination > .facetwp-type-pager >button ', { delay: 3000 })


    //   await popupElement.$('#pum-15098');
    if (popupElement) {
        await popupElement.click('#pum-15098');
        await popupElement.click('button.pum-close');


    }
    await page.click(".facetwp-load-more", { delay: 50000 })



    //   .........................................................................................
