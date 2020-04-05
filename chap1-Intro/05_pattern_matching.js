// function doing the match: a sentence with present tense
function isGrammaticallyCorrect( sentence ) {
  // Pattern for the singular 3rd person
    let pat3s = /^(He|She|It)\s.*?s$/;
  //Pattern for all other persons
    let patOp = /^(I|You|We|They)\s.*?[^s]$/;
  return pat3s.test( sentence )
    || patOp.test ( sentence );
}

// ask a few
let sentences = ["I am", "I was", "I is"];

sentences.forEach((sentence) => {
  let correct = isGrammaticallyCorrect(sentence);
  if(correct) {
    console.log(`Sentence "${sentence}" is grammatically correct.`);
  } else {
    console.log(`Sentence "${sentence}" is NOT grammatically correct.`);
  }

});

