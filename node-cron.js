const CronJob = require('cron').CronJob; 
const request = require('request');

const url = "";

new CronJob('* * * * * *', function() { 
    console.log('You will see this message every second'); 
    request({url: url, method: "GET"})
}, null, true, 'America/Los_Angeles');