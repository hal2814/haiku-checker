export class Word{

  constructor(word){
    this.word = word;
    this.vowelCount = 0;
    this.consonantCount = 0;
    this.syllable = 0;
  }

  includesVowel () {
    if(this.word.includes('a')) {return true;}
    if(this.word.includes('e')) {return true;}
    if(this.word.includes('i')) {return true;}
    if(this.word.includes('o')) {return true;}
    if(this.word.includes('u')) {return true;}
    if(this.word.includes('y')) {return true;}
  }

  countVowels () {
    original = this.word.length;
    let count = 0;
    for (let i = 0; i < this.word.length; ++i){
      let letter = word.charAt(i);
      if (includesVowel(letter)){
          count +=1;
      }
    }
    this.vowelCount = count;
    this.consonantCount = (original - count);
    return count;
  }

  countSyllables () {
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
