var facto = function (m) {
    if (m>=0) {
        if (m==0){
            var f = 1;
            return f;
        }
        else {
            var f = m*facto(m-1);
            return f;
        }
    }
}

var readline = require('readline-sync');

while (true){
    var n = parseInt(readline.question("An integer please: "));
    var fn = facto(n);
    console.log(n + ' factorial is: ' + fn + '\n');
}
