const fs = require('fs');
const input = process.argv.slice(2, process.argv.length);
// const name = input[0];
// const github = input[1];
const [name, github] = input;

// const printInput = (input) => {
//     input.map((text) => {
//         console.log(text);
//     })
// }

// printInput(input);

const generatePage = (userName, githubName) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equic="X-UA-Compatible" content="ie=edge">
            <title>Portfolio</title>
        </head>

        <body>
            <h1>${userName}</h1>
            <h2><a href="https://github.com/${githubName}">Github</a></h2>
        </body>
        </html>
        `;
};

// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio Complete! check out index.html to see the output!');
})