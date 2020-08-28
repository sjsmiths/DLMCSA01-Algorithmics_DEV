const isPrime = (m) => {
    const assert = require('assert');
    assert(Number.isInteger(m)==true,"Sorry! Only integers please!");
    assert(m>=0,"Sorry! No negatives please!");
    let d = true;
    if (m==2) d = false;
    if (m>2) {
        let i = 2;
        let d = ((m % i) == 0);
        while ((d==false) && (i<m-1)){
            i++;
            d = ((m % i) == 0);
        }
    }
    return !d;
}

const readline = require('readline-sync');

while (true) {
    const num = Number(readline.question("An integer please: "));
    let pri = isPrime(num);
    console.log(num + ' is prime: ' + pri + '\n');
}
