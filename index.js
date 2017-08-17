const args = process.argv.slice(2);
const url = args[0];

const request = require('request');

request(url, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    let mp3 = body.match(/cdn\..*\.mp3/i)[0];

    mp3 = mp3.replace(/\\/g, '');

    mp3 = 'https://' + mp3;

    console.log(decodeURI(mp3));
});
