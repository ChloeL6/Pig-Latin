// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

// If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."

//text passage (user Input);

// if ... else if 
//1: exception 2: vowels 3: consonants
// vowels (a e i o u) not y => umbrella + "way"
// consonants = code . take c + ay
// exception  qu => queen, take qu + ay

// function takes text and change to array;
// compare one word, if first letter is vowel, qu, the rest is consonants 
    //if vowels add + "way"
    // if qu, say qu
    // else consonoant add + "ay"
// take two words as arguments
  //took one word, added way
  // take 2 words, add way to both

const exception = "qu";

const text = "one oneteen";

function pigLatin(text) {
  const vowelsArr = ["a", "e", "i", "o", "u"];

  const textArr = text.split(" ");
  //iterate through each element of array
  // if conditional
  // "one", "oneteen" iterate through with forEach
  // "one" into for loop so we can compare to vowelsArr
  // "when its true, we return 1"

  //for 
  let newArr = [];
  textArr.forEach(function(element) {
    for (let i = 0; i < vowelsArr.length; i++) {
      
      if (element[0] === vowelsArr[i]) {
        return element.concat("way");
      }
      
    }
    newArr.push(newWord);
  });
  return newArr;
}


    if (element[0] === vowelsArr[i])
  });
  for (let i = 0; i < vowelsArr.length; i++) {
    if (textArr[0] === vowelsArr[i]) {
      return textArr.concat("way");
    }
  }
  return -1;
}


 