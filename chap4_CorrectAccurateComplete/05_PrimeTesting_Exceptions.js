var isPrime = function (m) {
    if (Number.isInteger(m)==false){
        return new Error("Sorry! Only integers please!");
    }
    else {
        if (m<0){
            return new Error("Sorry! No negatives please!");
        }
        else {
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
    }
}


var readline = require('readline-sync');
while (true){
    var num = Number(readline.question("An integer please: "));
    var pri = isPrime(num);

    if ( pri instanceof Error ) {
        console.log(num + ' is prime: ' , pri, '\n');
    }
    else {
        console.log(num + ' is prime: ' + pri + '\n');
    }
}
