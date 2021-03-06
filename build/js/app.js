(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Word = exports.Word = function () {
  function Word(word) {
    _classCallCheck(this, Word);

    this.word = word;
    this.vowelCount = 0;
    this.consonantCount = 0;
    this.syllable = 0;
  }

  _createClass(Word, [{
    key: 'isVowel',
    value: function isVowel(letter) {
      if (letter.includes('a') || letter.includes('e') || letter.includes('i') || letter.includes('o') || letter.includes('u') || letter.includes('y')) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'countVowels',
    value: function countVowels() {
      var count = 0;
      for (var i = 0; i < this.word.length; ++i) {
        var letter = this.word.charAt(i);
        if (this.isVowel(letter)) {
          count += 1;
        }
      }
      this.vowelCount = count;
      return count;
    }
  }, {
    key: 'startsWithVowel',
    value: function startsWithVowel() {
      if (this.isVowel(this.word[0]) === true && this.isVowel(this.word[1]) === true && this.word.length > 3) {
        return false;
      } else if (this.isVowel(this.word[0]) === true && this.word.length > 3) {
        this.syllable -= 1;
        return true;
      }
    }
  }, {
    key: 'smallWordTwoVowels',
    value: function smallWordTwoVowels() {
      if (this.isVowel(this.word[this.word.length - 1]) === true && this.isVowel(this.word[0]) === true && this.word.length < 4) {
        this.syllable -= 1;
        return true;
      }
    }
  }, {
    key: 'twoVowelsFirst',
    value: function twoVowelsFirst() {}
  }, {
    key: 'doubleVowelExceptions',
    value: function doubleVowelExceptions(letter, nextletter, thirdLetter) {
      if (letter === 'i' && nextletter === 'o' && thirdLetter != 'u') {
        return 1;
      } else if (letter === 'e' && nextletter === 'o' && thirdLetter != 'u') {
        return 1;
      } else if (letter === 'i' && nextletter === 'a') {
        return 1;
      } else if (letter === 'y' && nextletter === 'e') {
        return 1;
      } else if (letter === 'y' && nextletter === 'i') {
        return 1;
      } else {
        return 0;
      }
    }
  }, {
    key: 'endsWithE',
    value: function endsWithE() {
      var word = this.word;
      if (word[word.length - 1] === 'e' && word.length > 3 && word[word.length - 2] === 'r' && word[word.length - 3] === 'i') {
        return false;
      } else if (word[word.length - 1] === 'e' && word.length > 3 && word[word.length - 2] != 'l') {
        this.syllable -= 1;
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'countSyllables',
    value: function countSyllables() {
      this.countVowels();
      var vowels = this.vowelCount;
      for (var i = 0; i < this.word.length; ++i) {
        var letter = this.word.charAt(i);
        var nextLetter = this.word.charAt(i + 1);
        var thirdLetter = this.word.charAt(i + 2);
        if (this.isVowel(letter)) {
          vowels += this.doubleVowelExceptions(letter, nextLetter, thirdLetter);
          console.log("word =" + this.word);
          console.log("vowel count = " + vowels);
          if (this.isVowel(nextLetter)) {
            vowels -= 1;
            ++i;
            if (this.isVowel(thirdLetter)) {
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
  }]);

  return Word;
}();

var Haiku = exports.Haiku = function () {
  function Haiku(line1, line2, line3) {
    _classCallCheck(this, Haiku);

    this.line1 = line1.toLowerCase();
    this.lineCount1 = 0;
    this.line2 = line2.toLowerCase();
    this.lineCount2 = 0;
    this.line3 = line3.toLowerCase();
    this.lineCount3 = 0;
  }

  _createClass(Haiku, [{
    key: 'addSyllables',
    value: function addSyllables(line) {
      var count = 0;
      var lineArray = line.split(" ");
      for (var i = 0; i < lineArray.length; ++i) {
        var word = new Word(lineArray[i]);
        count += word.countSyllables();
      }
      return count;
    }
  }, {
    key: 'isHaiku',
    value: function isHaiku() {
      var count = 0;
      var infoString = "";
      var line1Count = this.addSyllables(this.line1);
      var line2Count = this.addSyllables(this.line2);
      var line3Count = this.addSyllables(this.line3);

      if (line3Count === 5) {
        count += 1;
      } else if (line3Count < 5) {
        infoString = "Line 3 needs more syllables! You have only " + line3Count + " syllables on Line 3. " + infoString;
      } else if (line3Count > 5) {
        infoString = "Line 3 has too many syllables! You have " + line3Count + " syllables on Line 3. " + infoString;
      }

      if (line2Count === 7) {
        count += 1;
      } else if (line2Count < 7) {
        infoString = "Line 2 needs more syllables! You have only " + line2Count + " syllables on Line 2. " + infoString;
      } else if (line2Count > 7) {
        infoString = "Line 2 has too many syllables! You have " + line2Count + " syllables on Line 2. " + infoString;
      }

      if (line1Count === 5) {
        count += 1;
      } else if (line1Count < 5) {
        infoString = "Line 1 needs more syllables! You have only " + line1Count + " syllables on Line 1. " + infoString;
      } else if (line1Count > 5) {
        infoString = "Line 1 has too many syllables! You have " + line1Count + " syllables on Line 1. " + infoString;
      }

      if (count === 3) {
        return "valid";
      } else {
        return infoString;
      }
    }
  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _haiku = require('./../js/haiku.js');

$(document).ready(function () {
  $('#haiku-form').submit(function (event) {
    event.preventDefault();
    var line1 = $('#line1').val();
    var line2 = $('#line2').val();
    var line3 = $('#line3').val();
    var newHaiku = new _haiku.Haiku(line1, line2, line3);
    $('#output1').text(newHaiku.line1);
    $('#output2').text(newHaiku.line2);
    $('#output3').text(newHaiku.line3);
    var check = newHaiku.isHaiku();
    if (check === "valid") {
      $('#validity1').text("");
      $('#validity2').text("This is a valid haiku.");
    } else {
      $('#validity1').text("This is NOT a valid haiku because: ");
      $('#validity2').text(check);
    }
  });
});

},{"./../js/haiku.js":1}]},{},[2]);
