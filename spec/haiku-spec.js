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

  it('checks how many syllables are in a word', function() {
    expect(threeword.countSyllables()).toEqual(3);
    expect(twoword.countSyllables()).toEqual(2);
    expect(oneword.countSyllables()).toEqual(1);
  });
});
