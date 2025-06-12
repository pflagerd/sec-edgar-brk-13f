
import edgarApi, { CIK } from 'edgar-api';

const driver = new edgarApi.default("DanielPflager daniel.pflager@gmail.com");
const cik = new CIK('0001067983'); // Berkshire Hathaway's CIK

// Now you can use the driver
const submissions = await driver.submissions(cik);
//console.log(submissions);

const recentFilings = submissions.filings.recent.form
//console.log(recentFilings)
const thirteenFFilings = recentFilings.filter(form => form === '13F-HR' || form === '13F-HR/A' );
console.log(thirteenFFilings);
