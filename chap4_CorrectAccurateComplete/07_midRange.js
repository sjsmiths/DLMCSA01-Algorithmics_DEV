var midRangeV0 = function (Ar,epsi) {
    var n = Ar.length;
    var lb = ((1-epsi)*n)/2; var hb = ((1+epsi)*n)/2;
    var r = Math.floor(Math.random() * n);
    var x = Ar[r];  var k = 1;
    for (var i=0; i<n; i++) {
        if (Ar[i] < x) {k++;}
    }
    if ((k >= lb) && (k<=hb)){ return k; }
    else { return undefined; }
}

var midRangeV = function (Ar,epsi,nmaxt) {
    var r = midRangeV0(Ar,epsi);  var c = 1;
    while ((r==undefined) || (c<nmaxt)){
        r = midRangeV0(Ar,epsi);
        c++;
    }
    return r;
}

var readlineSync = require('readline-sync');
var tfn = readlineSync.question('File name please: ');
var eps = Number(readlineSync.question('Epsilon value please: '));
const lineReader = require('n-readlines');
const lrdr = new lineReader(tfn);
var line;
var s = "";
var lNo = 0;
var A = [];
while (line = lrdr.next()) {
    s = line.toString('ascii');
    if (s[s.length-1]=='\n'){
        A.push(Number((s.slice(0, -1))));
    }
    else {
        A.push(Number(s));
    }
    lNo++;
}

var lbo = ((1-eps)*lNo)/2; var hbo = ((1+eps)*lNo)/2;
console.log('Epsilon: ' + eps + ' Mid range: [' + lbo + ' , ' +hbo+ ']');
var r1 = midRangeV0(A,eps);
console.log('Rank and value found after first attempt: '+r1+' , '+A[r1]);
if (r1 == undefined) {
    var r2 = midRangeV(A,eps,10);
    console.log('\nRank & value found after more attempts: '+r2+' , '+A[r2]);
}
 
