let readline = require('readline-sync');
let isPrimeIter = function (n1) {
    if (n1>1) {
        let r = true; let i = 2;
        while (r && i<n1){r = (n1 % i !== 0); i++;}
        return r;
    }
}
let isPrimeRec = function (n1,d) {
    if (n1>1) {
        if (d===1){return true;}
        else {
            if (n1 % d === 0){return false;}
            else {return isPrimeRec(n1,d-1);}
        }
    }
}
let primesIter = function (n1) {
    if (n1>1) {
        let r = [];
        for (let i=2; i<=n1; i++) {
            if (isPrimeIter(i)) {r.push(i);}
        }
        return r;
    }
}
let primesRec = function (n1) {
    if (n1>1) {
        if (n1===2) {let rn1 = []; rn1.push(n1); return rn1;}
        else {
            let rpredn1 = []; rpredn1 = primesRec(n1-1);
            if (isPrimeRec(n1,n1-1)){rpredn1.push(n1);}
            return rpredn1;
        }
    }
}
while (true){
    let mess = '\nStrictly positive integer please ';
    let n = parseInt(readline.question(mess));
    let fi = []; let fr = [];
    fi = primesIter(n); fr = primesRec(n);
    console.log('Prime numbers less or equal to ' + n);
    console.log('Iterative method: '); console.log(fi);
    console.log('Recursive method: '); console.log(fr);
}
