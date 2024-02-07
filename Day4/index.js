const path = require('path')

function resolvePath(relativePath){
    const absolutePath = path.resolve(relativePath)
    console.log("Resolved Path: ", absolutePath);
}

resolvePath('Day4/file.txt')
resolvePath('nonexistence-folder/file.txt');