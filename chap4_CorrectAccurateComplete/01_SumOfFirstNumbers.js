const sum = (n) => {
    if (n>=0) {
        let s = 0;
        for (let i=1; i<=n; i++)
            s = s + i;
        return s;
    }
}

const readline = require('readline-sync');

while (true){
    let m = parseInt(readline.question("An integer please: "));
    let sm = sum(m);
    console.log((m+1) + ' first integers added: ' + sm + '\n');
}
