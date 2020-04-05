// build a connection to the terminal
const readline = require("readline");
const terminal = readline.createInterface(
  { input: process.stdin, output: process.stdout });

// ask a question
terminal.question("What is your name ? ", function(name) {
  // do something with the answer
  terminal.write("Hello World\nKind Regards\n");
  // a string with a reference to a variable
  terminal.write(`${name}, hi!\n`);
  terminal.close();
});
