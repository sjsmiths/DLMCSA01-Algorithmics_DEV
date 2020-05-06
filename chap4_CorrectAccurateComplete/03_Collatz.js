var collatz = function (n1) {
    if (n1>0) {
        var m = n1;
        var c = new Array();
        c.push(m);
        while (m>1) {
            if ((m%2)==0){
                m = m / 2;
            }
            else {
                m = (3*m) + 1;
            }
            c.push(m);
        }
        return c;
    }
}


var readline = require('readline-sync');

while (true){
    var mes = "\nStricly positive integer please: ";
    var n = parseInt(readline.question(mes));
    var cn = new Array();
    cn = collatz(n);
    console.log("Collatz sequence of " + n);
    console.log(cn);
    console.log("Sequence's length: " + cn.length);
}
