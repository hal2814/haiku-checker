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

  // includesVowel () {
  //   if(this.word.includes('a')) {return true;}
  //   if(this.word.includes('e')) {return true;}
  //   if(this.word.includes('i')) {return true;}
  //   if(this.word.includes('o')) {return true;}
  //   if(this.word.includes('u')) {return true;}
  //   if(this.word.includes('y')) {return true;}
  // }

  includesVowel () {
    if(this.word.includes('a') || this.word.includes('e') || this.word.includes('i') || this.word.includes('o') || this.word.includes('u') || this.word.includes('y')) {
      return true;
    }else {
      return false;
    }
  }

  countVowels () {
    let original = this.word.length;
    let count = 0;
    for (let i = 0; i < this.word.length; ++i){
      let letter = this.word.charAt(i);
      if (this.includesVowel(letter)){
          count +=1;
      }
    }
    this.vowelCount = count;
    this.consonantCount = (original - count);
    return count;
  }

  countSyllables () {
    this.countVowels();
    let vowels = this.vowelCount;
      for (let i = 0; i < this.word.length; ++i){
        let letter = this.word.charAt(i);
        let nextLetter = this.word.charAt(i+1);
        let thirdLetter = this.word.charAt(i+2);
        if(this.includesVowel(letter)){
          if(this.includesVowel(nextLetter)){
          	vowels -= 1;
            ++i;
            if(this.includesVowel(thirdLetter)){
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


// includesVowel () {
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
//     if (includesVowel(letter)){
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
//       if(includesVowel(letter)){
//         if(includesVowel(nextLetter)){
//           vowels -= 1;
//           ++i;
//           if(includesVowel(thirdLetter)){
//             vowels -= 1;
//             ++i;
//           }
//         }
//       }
//     }
//   syllable = vowels;
//   return syllable;
// }
