// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // 
    document.getElementById('numeric-display') .textContent= timerValue;
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    VarPassed = 100
    document.getElementsByClassName('progress-bar') = 
     for (var i =0; i < bars.length; i++) {
      bars[i].style.width = progress + '%';
    }
    
  },
  drawLitFuses: function(timerValue){
    var percentBurnt = timeValue/100
    var numFuses = document.getElementById('fuses') = length;
    document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
    //   document.getElementsByClassName('burnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
    document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
    //   document.getElementsByClassName('unburnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
  },
  drawCrawlers: function(timerValue){
    var Passed = 100 - timerValue;
    if (timerValue/2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + '0px';
    
  }
};
