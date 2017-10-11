import {Word} from './../js/haiku.js';

describe('Word', function() {
  let threeword;
  let twoword;
  let oneword;

  beforeEach(function() {
    threeword = new Word("dividing");
    twoword = new Word("cooking");
    oneword = new Word("go");
  });

  it('checks how many vowels are in a word', function() {
    expect(threeword.countVowels()).toEqual(3);
    expect(twoword.countVowels()).toEqual(3);
    expect(oneword.countVowels()).toEqual(1);
  });
});
