var isPrime = function (m) {
    var assert = require('assert');
    assert(Number.isInteger(m)==true,"Sorry! Only integers please!");
    assert(m>=0,"Sorry! No negatives please!");
    var d = true;
    if (m==2) {d = false;}
    if (m>2) {
        var i = 2;
        var d = ((m % i) == 0);
        while ((d==false) && (i<m-1)){
            i++;
            d = ((m % i) == 0);
        }
    }
    return !d;
}

var readline = require('readline-sync');

while (true) {
    var num = Number(readline.question("An integer please: "));
    var pri = isPrime(num);
    console.log(num + ' is prime: ' + pri + '\n');
}
