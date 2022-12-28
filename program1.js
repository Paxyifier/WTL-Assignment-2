const {typeOfTriangle} = require('./Triangle');
const readlineSync = require('readline-sync');

var run = true;
while (run) {
    console.log(`Enter sides of the triangle`)
    var s1 = readlineSync.question('Enter side 1: ');
    var s2 = readlineSync.question('Enter side 2: ');
    var s3 = readlineSync.question('Enter side 3: ');
    console.log(`The triangle is of type ${typeOfTriangle(s1, s2, s3)}.`);
    let quit = readlineSync.question('Do you want to quit? [y/n]: ');
    if (quit === 'y' || quit === 'Y') {
        run = false;
    }
}