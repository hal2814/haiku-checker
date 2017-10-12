export class Word {

  constructor(word) {
    this.word = word;
    this.vowelCount = 0;
    this.consonantCount = 0;
    this.syllable = 0;
  }

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

  startsWithVowel () {
    if(this.isVowel(this.word[0])=== true && this.word.length > 3){
      this.syllable -= 1;
      return true;
    }
  }

  smallWordTwoVowels () {
    if(this.isVowel(this.word[this.word.length-1])=== true &&this.isVowel(this.word[0])=== true && this.word.length < 4){
      this.syllable -= 1;
      return true;
    }
  }

  twoVowelsFirst () {

  }

  doubleVowelExceptions (letter,nextletter,thirdLetter) {
    if(letter === 'i' && nextletter === 'o' && thirdLetter != 'u'){
      return 1;
    }
    else if(letter === 'e' && nextletter === 'o' && thirdLetter != 'u'){
      return 1;
    }
    else if(letter === 'i' && nextletter === 'a'){
      return 1;
    }
    else if(letter === 'y' && nextletter === 'e'){
      return 1;
    }
    else if(letter === 'y' && nextletter === 'i'){
      return 1;
    }else{return 0;}
  }

  endsWithE() {
    let word = this.word;
    if((word[word.length-1] === 'e') && (word.length > 3) && (word[word.length-2] === 'r') && (word[word.length-3] === 'i')){
      return false;
    }else if((word[word.length-1] === 'e') && (word.length > 3) && (word[word.length-2] != 'l')){
      this.syllable -= 1;
      return true;
    }else {return false;}
  }

  countSyllables () {
    this.countVowels();
    let vowels = this.vowelCount;
    for (let i = 0; i < this.word.length; ++i){
      let letter = this.word.charAt(i);
      let nextLetter = this.word.charAt(i+1);
      let thirdLetter = this.word.charAt(i+2);
      if(this.isVowel(letter)){
        vowels += this.doubleVowelExceptions(letter,nextLetter,thirdLetter);
        console.log("word =" + this.word);
        console.log("vowel count = " + vowels);
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
  console.log("final vowel count =" + vowels);
  this.syllable = vowels;
  this.endsWithE();
  this.startsWithVowel();
  this.smallWordTwoVowels();
  console.log("syllables =" + this.syllable);
  return this.syllable;
  }
}

export class Haiku {

  constructor(line1, line2, line3){
    this.line1 = line1;
    this.lineCount1 = 0;
    this.line2 = line2;
    this.lineCount2 = 0;
    this.line3 = line3;
    this.lineCount3 = 0;
  }

  addSyllables(line) {
    let count = 0;
    let lineArray = line.split(" ");
    for (let i = 0; i < lineArray.length; ++i){
      let word = new Word(lineArray[i]);
      count +=word.countSyllables();
    }
  return count;
  }

  isHaiku() {
    let count = 0;
    let infoString = "";
    let line1Count = this.addSyllables(this.line1);
    let line2Count = this.addSyllables(this.line2);
    let line3Count = this.addSyllables(this.line3);

    if(line3Count === 5){
      count += 1;
    }else if(line3Count < 5 ){
      infoString = "Line 3 needs more syllables! You have only " +line3Count+ " syllables on Line 3. " +infoString;
    }else if(line3Count > 5 ){
      infoString = "Line 3 has too many syllables! You have " +line3Count+ " syllables on Line 3. " +infoString;
    }

    if(line2Count === 7){
      count += 1;
    }else if(line2Count < 7 ){
      infoString = "Line 2 needs more syllables! You have only " +line2Count+ " syllables on Line 2. "+infoString;
    }else if(line2Count > 7 ){
      infoString = "Line 2 has too many syllables! You have " +line2Count+ " syllables on Line 2. " +infoString;
    }

    if(line1Count === 5){
      count += 1;
    }else if(line1Count < 5 ){
      infoString = "Line 1 needs more syllables! You have only " +line1Count+ " syllables on Line 1. " +infoString;
    }else if(line1Count > 5 ){
      infoString = "Line 1 has too many syllables! You have " +line1Count+ " syllables on Line 1. " +infoString;
    }

    if(count === 3){
      return "valid";
    }else{
      return infoString;
    }
  }
}
