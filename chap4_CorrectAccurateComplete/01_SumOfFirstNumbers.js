var sum = function (n) {
    if (n>=0) {
        var i = 0;
        var s = 0;
        for (i=1; i<=n; i++) {
            s = s + i;
        }
        return s;
    }
}

var readline = require('readline-sync');

while (true){
    var m = parseInt(readline.question("An integer please: "));
    var sm = sum(m);
    console.log((m+1) + ' first integers added: ' + sm + '\n');
}
