const fs = require('fs')
const generatePage = require('./src/page-template')

const input = process.argv.slice(2, process.argv.length);

const [name, github] = input;



fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio Complete! check out index.html to see the output!');
})