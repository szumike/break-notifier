const notifier = require('node-notifier');

const defaultMinutesNumber = 30;
const defaultMessage = "It's time to quick break!";

const args = process.argv.slice(2);
const minutesNumber = parseInt(args[0]) || defaultMinutesNumber;
const message = args[1] || defaultMessage;

console.log('Notifier started.');

let index = minutesNumber;
setInterval(() => {
  --index;
  if (index % 5 == 0) console.log(`${index} minutes left to break.`);

  if (index < 1) {
    notifier.notify({
      title: 'Break!!',
      message: message
    });
    index = minutesNumber;

    console.log('Break notification', Date());
  }
}, 60 * 1000);
