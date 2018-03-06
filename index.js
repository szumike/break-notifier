const notifier = require('node-notifier');
const minutesNumber = 30;

console.log('Notifier started.');

let index = minutesNumber;

setInterval(() => {
    console.log(`${--index} minutes left to break.`);

    if (index < 1) {
        notifier.notify({
            title: 'Break!!',
            message: 'It\'s time to quick break!'
        });
        index = minutesNumber;
    }
}, 60 * 1000);