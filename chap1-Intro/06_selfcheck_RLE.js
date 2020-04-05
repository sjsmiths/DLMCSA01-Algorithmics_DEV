// (THINKME: rather use a library such as npm's rle and random data?)
// write a function rleEncode
//  which takes as input a binary string and
//  returns it rle-encoding in binary string
function rleEncode ( ) {
  // ...
}

// check rleEncode
let input = "11111111111111111000011111111111";
let encoded = rleEncode( input );
let correct = "110001000100101011" === encoded;
console.log(`Encoded correctly ? ${correct}`);