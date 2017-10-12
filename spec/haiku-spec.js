import {Haiku, Word} from './../js/haiku.js';

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
