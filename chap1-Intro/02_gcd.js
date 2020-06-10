let readline = require('readline-sync');

let chcd =  function(n1, n2) {
  r = Math.min(n1, n2);
  while ( !( ((n1%r)==0) && ((n2%r)==0) ) ) {
    r--;
  }
  return r;
}

let strictlyPosInt = function(s){
  let n = Number(s);
  return((s!='') && (Number.isInteger(n)) &&  (n>0))
}

while (true){
  let mess1 = '\nEnter the first strictly positive integer ';
  let mess2 = 'Enter the second strictly positive integer ';
  let mess3 = 'Only strictly positive integers please!';
  let ns = readline.question(mess1);
  let ms = readline.question(mess2);
  if ((strictlyPosInt(ns)) && (strictlyPosInt(ms))){
    n = parseInt(ns);
    m = parseInt(ms);
    console.log('HCD between '+n+' and '+m+ ' is '+chcd(n,m));
  }
  else {
    console.log(mess3);
  }
}

