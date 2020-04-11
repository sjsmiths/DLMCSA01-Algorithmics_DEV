// each block here can be copy and pasted into a REPL console
// started by simply invoking "node"

// create an array of a first size
n1 = 5;
var arr1 = new Array(n1)
arr1[0] = 'Z'
arr1[1] = 'Y'
arr1[2] = 'X'
arr1[3] = 'W'
arr1[4] = 'V'

// one can add new elements, growing the array
arr1.push('U');

// iterating through the array to print it
arr1.forEach ( function ( m ) {
    console.log (" Array member " + m);
});

