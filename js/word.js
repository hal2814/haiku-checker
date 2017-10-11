function Word (word){
  this.word = word;
  this.vowelCount = 0;
  this.consonantCount = 0;
  this.syllable = 0;
}

Word.prototype.includesVowel = function () {
  if(this.word.includes('a')) {return true;}
  if(this.word.includes('e')) {return true;}
  if(this.word.includes('i')) {return true;}
  if(this.word.includes('o')) {return true;}
  if(this.word.includes('u')) {return true;}
  if(this.word.includes('y')) {return true;}
};

Word.prototype.countVowels = function () {
  original = this.word.length;
  let count = 0;
  for (let i = 0; i < this.word.length; ++i){
    for (let j = 0; j < vowels.length; ++j){
      if (this.word.charAt(i) === vowels.charAt(j)){
        count +=1;
      }
    }
  }
  this.vowelCount = count;
  this.consonantCount = (original - count);
  return count;
};

Word.prototype.countSyllables = function () {
  if (this.vowelCount > 2){
    for (let i = 0; i < this.word.length; ++i){
      if(this.word.charAt(i).includesVowel){
        if(this.word.charAt(i+1).includesVowel){}
      }
    }
  }
  if (this.vowelCount === 2){
    // if vowel first character

    // if consonant first character

    // if 2 vowels together
    for (let i = 0; i < this.word.length; ++i){
      for (let j = 0; j < vowels.length; ++j){
        if (this.word.charAt(i) === vowels.charAt(j)){
          for (let j = 0; j < vowels.length; ++j){
            if(this.word.charAt(i+1) === vowels.charAt(j)){
              this.syllable +=1;
              ++i;
            }
            else {
              this.syllable +=2;
            }
          }
        }
      }
    }
    return this.syllable;
    // if 'e' is at end

    // if 'ire' at end

  }

  if (this.vowelCount === 1){
    this.syllable += 1;
    return this.syllable;
  }
};
