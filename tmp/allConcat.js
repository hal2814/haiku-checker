import { Haiku, Word } from './../js/haiku.js';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    let line1 = $('#line1').val();
    let line2 = $('#line2').val();
    let line3 = $('#line3').val();
    let newHaiku = new Haiku(line1,line2,line3);
    $('#output1').text(newHaiku.line1);
    $('#output2').text(newHaiku.line2);
    $('#output3').text(newHaiku.line3);
    let check = newHaiku.isHaiku()
    if(check === "valid"){
      $('#validity2').text("This is a valid haiku");
    }else{
      $('#validity1').text("This is NOT a valid haiku because: ");
      $('#validity2').text(check);
    }
  });
});
