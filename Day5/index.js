const path = require('path')

function checkFileExtension(filePath, expextedExtension) {
    const fileExtension = path.extname(filePath);

    if(fileExtension === expextedExtension) {
        console.log(`File has the expected extension: ${expextedExtension}`);
    }
    else{
        console.log(`File does not have the expected extension. Expected: ${expextedExtension}, Actual: ${fileExtension}`)
    }
}

checkFileExtension('test-files/files1.txt', '.txt')
checkFileExtension('test-files/image.png', '.jpg')