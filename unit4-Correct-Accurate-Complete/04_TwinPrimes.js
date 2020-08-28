const isPrime = (m) => {
    let d = true;
    if (m==2)
        d = false;
    if (m>2) {
        let i = 2;
        d = ((m % i) == 0);
        while ( d==false && i<m-1 ){
            i++;
            d = ((m % i) == 0);
        }
    }
    return !d;
}

const  twinP = (m) => {
    if (m>=0) {
        let p = m;
        while (!isPrime(p) || !isPrime(p+2))
            p++;
        return p;
    }
}

var readline = require('readline-sync');

while (true){
    let mes = "\nPositive integer please: ";
    let n = parseInt(readline.question(mes));
    let p = twinP(n);
    console.log("First twin primes from " + n);
    console.log(p + " and " + (p+2));
}
