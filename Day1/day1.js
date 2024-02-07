const fs = require('fs');

function readFileContent(filePath) {
    //Using Promises to handle asynchronous code
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

const filePath = 'C:\\Users\\Adarsh Tiwari\\Desktop\\CodingTutorials\\30_days_of_Nodejs\\Day1\\file1.txt';

readFileContent(filePath)
.then((content) => {
    console.log('File content: ', content);
})
.catch((err) => {
    console.log('Error reading file: ', err);
})