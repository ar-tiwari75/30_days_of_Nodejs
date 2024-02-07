const fs = require('fs')
const path = require('path')

function writeToFile(filePath, content){
    fs.writeFile(filePath, content, (err) => {
        if(err){
            console.log(`Error writing to file: ${err.message}`);
        }
        else{
            console.log(`Data written to ${path.basename(filePath)}`)
        }
    })
}

writeToFile('output1.txt', 'Sample content.');
writeToFile('test-files/nonexistence-folder/output.txt', 'Content in a non-existence folder');