// Create a directory wtlab. Create 2 files within it and list all files within that directory.
const fs = require('fs');

fs.mkdirSync('./wtllab');
console.log('directory created')
fs.writeFileSync('./wtllab/file1.txt', 'Hello from file 1');
fs.writeFileSync('./wtllab/file2.txt', 'Hello from file 2');
console.log('files created')

var files =fs.readdirSync('./wtllab/');

console.log('reading files from directory');
for(var i = 0; i < files.length; i++) {
    console.log(files[i]);
}
