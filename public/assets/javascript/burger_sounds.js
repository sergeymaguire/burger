
$(document).ready(function() {

  var audioWhine0 = new Audio('http://soundbible.com/mp3/TomCat-Mr_Smith-2055290520.mp3');
  var audioWhine1 = new Audio('http://soundbible.com/mp3/Sheep Bleating-SoundBible.com-1373580685.mp3');
  var audioWhine2 = new Audio('http://soundbible.com/mp3/Turkey Gobble-SoundBible.com-312252853.mp3');
  var audioWhine3 = new Audio('http://soundbible.com/mp3/Dinosaur Roar-SoundBible.com-605392672.mp3');
  var audioWhine4 = new Audio('http://soundbible.com/mp3/Lion-SoundBible.com-621763115.mp3');

  var soundArray = [audioWhine0, audioWhine1, audioWhine2, audioWhine3, audioWhine4];

  $('.whine-button').on("click", function(){

    var i = Math.floor(Math.random()*soundArray.length);

    soundArray[i].play();

  });


});