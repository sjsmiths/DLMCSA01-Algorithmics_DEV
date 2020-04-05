// Assignment: Write a function sqroot which
// returns the square root of its first parameter
//

function sqroot ( n ) {
  // write here... including a return
}

// auto-check the sqroot function
function checkCorrect ( num, rt ) {
  // correct if the square differs by less than 0.1%
  let correct =  rt * rt - num  / rt*rt < 0.001;
  console.log ( `For ${num}, we get sqroot ${rt}: ${correct}.` );
  return correct;
}

// ... for a 1000 random numbers
let success = true;
for ( let count = 0; count < 1000; count++ ) {
  let num = Math.random()*1000 ;
  let rt = sqroot ( num );
  let correct = checkCorrect ( num, rt )
  success = success && correct;
}

console.log(`Did the check find an error? ${!success}`)


