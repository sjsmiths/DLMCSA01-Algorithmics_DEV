var isPrime = function (m) {
    var d = true;
    if (m==2) {
        d = false;
    }
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

var  twinP = function (m) {
    if (m>=0) {
        var p = m;
        while ((isPrime(p)==false) || (isPrime(p+2)==false)){
            p++;
        }
        return p;
    }
}

var readline = require('readline-sync');

while (true){
    var mes = "\nPositive integer please: ";
    var n = parseInt(readline.question(mes));
    var p = twinP(n);
    console.log("First twin primes from " + n);
    console.log(p + " and " + (p+2));
}
