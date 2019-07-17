const puppeteer = require('puppeteer');

(async function main() {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // Add contact name of the user you want to follow as typed in your contact list 
        const contactName = "Jake"

        await page.goto('https://web.whatsapp.com/');

        await page.waitForNavigation({
            waitUntil: 'networkidle0',
        });

        console.log('Page Loaded')

        const selector = `span[title~=${contactName}]`
        await page.waitFor(selector);
        await page.click(selector);

        const onlineSelector = 'span[title="online"]'

        while (true) {
            await page.waitFor(onlineSelector, { timeout: 0 })
            // var dateNow = firebase.firestore.Timestamp.fromDate(new Date());
            var dateNow = Date().toString()
            // var stringDate = dateNow.toDate().toString()

            console.log('online at', dateNow);

            await page.waitFor(1000);
        }
    }
    catch (err) {
        console.log('error: ', err);
    }
})()
