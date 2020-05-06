const midRangeV0 = (Ar,epsi) => {
    let n = Ar.length;
    let lb = ((1-epsi)*n)/2, hb = ((1+epsi)*n)/2;
    let r = Math.floor(Math.random() * n);
    let x = Ar[r], k = 1;
    for (let i=0; i<n; i++)
        if (Ar[i] < x) k++;
    if (k >= lb && k<=hb)
        return k;
    else
        return undefined;
}

const midRangeV = (Ar,epsi,nmaxt) => {
    let r = midRangeV0(Ar,epsi), c = 1;
    while (r==undefined || c<nmaxt) {
        r = midRangeV0(Ar,epsi);
        c++;
    }
    return r;
}

const readlineSync = require('readline-sync');
let tfn = readlineSync.question('File name please: ');
let eps = Number(readlineSync.question('Epsilon value please: '));
const lineReader = require('n-readlines');
const lrdr = new lineReader(tfn);

let line, s = "", lNo = 0, A = [];
while (line = lrdr.next()) {
    s = line.toString('ascii');
    if (s[s.length-1]=='\n')
        A.push(Number((s.slice(0, -1))));
    else
        A.push(Number(s));
    lNo++;
}

let lbo = ((1-eps)*lNo)/2, hbo = ((1+eps)*lNo)/2;
console.log('Epsilon: ' + eps + ' Mid range: [' + lbo + ' , ' +hbo+ ']');
let r1 = midRangeV0(A,eps);
console.log('Rank and value found after first attempt: '+r1+' , '+A[r1]);
if (r1 == undefined) {
    let r2 = midRangeV(A,eps,10);
    console.log('\nRank & value found after more attempts: '+r2+' , '+A[r2]);
}