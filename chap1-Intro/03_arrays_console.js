// The content of this "console extract" is rather made
// for the "REPL" console invoked by `node`
// then fed by pasting each of the blocks one after
// the other and observing the output.

// Here, the variable is held
let numbs = [];

// initialize the values of the array: push each
numbs.push(3);
numbs.push(9);
numbs.push(27);
numbs.push(81);

// add a function which sorts an array
// PL: actually numbs.sort((a,b)=>{return a-b})
//     would do the job!
//     ... and numbs.sort() would be a good example
//     of incorrect algorithm (it sorts by string)
function sortNumbers(nbs) {
  for (i = 0; i < nbs.length; i++) {
    for (j = i; j < nbs.length; j++) {
      if (nbs[j]<nbs[i]){
        v = nbs[i];
        nbs[i] = nbs[j];
        nbs[j] = v;
      }
    }
  }
}

// read the array
numbs;
// output: [ 3, 9, 27 , 81 ]

sortNumbers(numbs);
// output: -

numbs;
// output: [ 3, 9, 27, 81 ]
