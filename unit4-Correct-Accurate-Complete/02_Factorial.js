const facto = (m) => {
    if (m>=0) {
        if ( m==0 )
            return 1;
        else
            return m*facto(m-1);
    }
}

var readline = require('readline-sync');

while (true){
    var n = parseInt(readline.question("An integer please: "));
    var fn = facto(n);
    console.log(n + ' factorial is: ' + fn + '\n');
}
