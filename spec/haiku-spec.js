import {Haiku, Word} from './../js/haiku.js';

describe('Word', function() {
  let threeword;
  let twoword;
  let oneword;
  let eword;
  let ireWord;
  let leWord;
  let smallWord;
  let threeVowel;

  beforeEach(function() {
    threeword = new Word("dividing");
    twoword = new Word("cooking");
    oneword = new Word("go");
    eword = new Word("gone");
    ireWord = new Word("tire");
    leWord = new Word("pickle");
    smallWord = new Word("are");
    threeVowel = new Word("gracious")
  });

  it('checks how many syllables are in a word', function() {
    expect(threeword.countSyllables()).toEqual(3);
    expect(twoword.countSyllables()).toEqual(2);
    expect(oneword.countSyllables()).toEqual(1);
  });

  it('subtracts a syllable when a word ends with a silent e', function() {
    expect(threeword.countSyllables()).toEqual(3);
    expect(eword.countSyllables()).toEqual(1);
  });

  it('does not subtract a syllable if word ends with [ire] ', function() {
    expect(ireWord.countSyllables()).toEqual(2);
  });
  it('does not subtract a syllable if word ends with  [le]', function() {
    expect(leWord.countSyllables()).toEqual(2);
  });
  it('does not subtract syllable when word under 3 characters starts with a vowel and ends with an e', function() {
    expect(smallWord.countSyllables()).toEqual(1);
  });
  it('subtracts 2 syllables when word has 3 vowels in a row', function() {
    expect(threeVowel.countSyllables()).toEqual(2);
  });
});

//HAIKU TESTING

describe('Haiku', function() {
  let haikupoem;

  beforeEach(function() {
    haikupoem = new Haiku ("Javier is cool", "However Mark is cooler", "Poor Javi now sad")
  });

  it('checks that there is content in each line of the haiku', function() {
    expect(haikupoem.line1).toEqual("Javier is cool");
    expect(haikupoem.line2).toEqual("However Mark is cooler");
    expect(haikupoem.line3).toEqual("Poor Javi now sad");
  });

  it('checks that syllables are accounted for throughout poem', function() {
    expect(haikupoem.addSyllables(haikupoem.line1)).toEqual(4);
    expect(haikupoem.addSyllables(haikupoem.line2)).toEqual(7);
    expect(haikupoem.addSyllables(haikupoem.line3)).toEqual(5);
  });
});
