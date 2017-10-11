function Word (word){
  this.word = word;
  this.vowelCount = 0;
  this.consonantCount = 0;
  this.syllable = 0;
}

const vowels = "aeiouy";

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

Word.prototype.methodName = function () {
  if (this.vowelCount > 1){
    // if vowel first character

    // if consonant first character

    // if 2 vowels together

    // if 'e' is at end

    // if 'ire' at end

  }

  if (this.vowelCount === 1){
    this.syllable += 1;
    return [this.word];
  }
};
