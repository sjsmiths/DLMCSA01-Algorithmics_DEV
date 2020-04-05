const readline = require("readline");
const terminal = readline.createInterface(
  { input: process.stdin, output: process.stdout });

terminal.question("Enter the first strictly positive integer: ",  function (m) {
  terminal.question("Enter the second strictly positive integer: ", function (n) {
    terminal.write(`GCD between ${m} and ${n} is ${gcd(m, n)}.\n`);
    terminal.close();
  })
});

function gcd(n1, n2) {
  let r = Math.min(n1, n2);
  // we use !== instead of != to avoid surprise type changes
  while ( n1 % r !== 0 || n2 % r !== 0 ) {
    r--;
  }
  return r;
}
