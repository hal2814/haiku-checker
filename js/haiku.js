export class Haiku{

  constructor(line1, line2, line3){
    this.line1 = line1;
    this.lineCount1 = 0;
    this.line2 = line2;
    this.lineCount2 = 0;
    this.line3 = line3;
    this.lineCount3 = 0;
  }
}

export class Word{

  constructor(word){
    this.word = word;
    this.vowelCount = 0;
    this.consonantCount = 0;
    this.syllable = 0;
  }

  // isVowel () {
  //   if(this.word.includes('a')) {return true;}
  //   if(this.word.includes('e')) {return true;}
  //   if(this.word.includes('i')) {return true;}
  //   if(this.word.includes('o')) {return true;}
  //   if(this.word.includes('u')) {return true;}
  //   if(this.word.includes('y')) {return true;}
  // }

  isVowel (letter) {
    if(letter.includes('a') || letter.includes('e') || letter.includes('i') || letter.includes('o') || letter.includes('u') || letter.includes('y')) {
      return true;
    }else {
      return false;
    }
  }

  countVowels () {
    let count = 0;
    for (let i = 0; i < this.word.length; ++i){
      let letter = this.word.charAt(i);
      if (this.isVowel(letter)){
          count +=1;
      }
    }
    this.vowelCount = count;
    return count;
  }

  countSyllables () {
    this.countVowels();
    let vowels = this.vowelCount;
      for (let i = 0; i < this.word.length; ++i){
        let letter = this.word.charAt(i);
        let nextLetter = this.word.charAt(i+1);
        let thirdLetter = this.word.charAt(i+2);
        if(this.isVowel(letter)){
          if(this.isVowel(nextLetter)){
          	vowels -= 1;
            ++i;
            if(this.isVowel(thirdLetter)){
              vowels -= 1;
              ++i;
            }
          }
        }
      }
    this.syllable = vowels;
    return this.syllable;
  }
}


// isVowel () {
//   if(word.includes('a')) {return true;}
//   if(word.includes('e')) {return true;}
//   if(word.includes('i')) {return true;}
//   if(word.includes('o')) {return true;}
//   if(word.includes('u')) {return true;}
//   if(word.includes('y')) {return true;}
// }
//
// countVowels () {
//   original = word.length;
//   let count = 0;
//   for (let i = 0; i < word.length; ++i){
//     let letter = word.charAt(i);
//     if (isVowel(letter)){
//         count +=1;
//     }
//   }
//   vowelCount = count;
//   consonantCount = (original - count);
//   return count;
// }
//
// countSyllables () {
//   countVowels();
//   let vowels = vowelCount;
//     for (let i = 0; i < word.length; ++i){
//       let letter = word.charAt(i);
//       let nextLetter = word.charAt(i+1);
//       let thirdLetter = word.charAt(i+2);
//       if(isVowel(letter)){
//         if(isVowel(nextLetter)){
//           vowels -= 1;
//           ++i;
//           if(isVowel(thirdLetter)){
//             vowels -= 1;
//             ++i;
//           }
//         }
//       }
//     }
//   syllable = vowels;
//   return syllable;
// }
