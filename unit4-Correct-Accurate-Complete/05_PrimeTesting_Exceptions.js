const isPrime = (m) => {
    if (!Number.isInteger(m))
        throw new Error("Sorry! Only integers please!");
    else {
        if (m<0)
            throw new Error("Sorry! No negatives please!");
        else {
            let d = true;
            if (m==2) {d = false;}
            if (m>2) {
                let i = 2;
                let d = ((m % i) == 0);
                while ( d==false && i<m-1 ){
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
    let num = Number(readline.question("An integer please: "));
    try {
        let pri = isPrime(num);
        console.log(`Is prime? ${pri}`)
    } catch (e) {
        console.log(`An error occurred: ${e}`)
    }
}
