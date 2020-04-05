const m = parseInt(process.argv[2]);
const n = parseInt(process.argv[3]);

function gcd(n1, n2) {
  let r = Math.min(n1, n2);
  // we use !== instead of != to avoid surprise type changes
  while ( n1 % r !== 0 || n2 % r !== 0 ) {
    r--;
  }
  return r;
}
console.log(`GCD between ${m} and ${n} is ${gcd(m, n)}.`);
