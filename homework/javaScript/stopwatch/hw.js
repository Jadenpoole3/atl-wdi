// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
   
    

      /* if($(this).attr('id') == 'nextLink'){
        newIndex = activeItemIndex + 1;
      } else {
          newIndex = activeItemIndex - 1;
      }
      */

      $('advanceTenMillisecs').addFunction();
        //It increases the number of milliseconds by ten.
        this.millisecs += 10;
       // If the number of milliseconds reaches 1000,
        if('this.millisecs' >= 1000); {
      //it resets the number of milliseconds to zero.
        this.millisecs = 0;
      //it increments the number of seconds.
       this.millisecs = i++;
      }
      //If the number of seconds reaches 60,
      if('this.seconds' >= 60); {

    //it resets the number of seconds to zero.
    this.seconds = 0;
    //it increments the number of minutes.
    this.mintutes = i++;
  }

 /* It resets the counts of minutes, seconds, and milliseconds to zero.
  2.  It resets the list of laps to be empty.*/

  reset: function(){
   this.minutes = 0;
   this.seconds = 0;
   this.millisecs = 0;
   this.laps = 0;
  },

 /* If the stopwatch is not running,
  a. it sets the state of the stopwatch to 'running'.
  b. it calls `tickClock` in order to start the ticking of the clock.
2.  If the stopwatch is running,
  a. it does nothing*/


  start: function(){
    if( 'this.stopwatch') {
     this.stopwatch = running;
     this.tickClock()
    }
  },


  stop: function(){
    if('this.stopwatch') {
      this.stopwatch = notRunning;

    }
  },
  lap: function(){
    if('this.stopwatch') {

    }
  }
};

/// User Interface ///
const ViewEngine = {

  updateTimeDisplay: function(mins, secs, millisecs) {

     /*It displays the values of minutes, seconds, and (tens of)
    milliseconds elapsed in the DOM element with id `time-display`, in
    the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
    `00:00:00`.
2.  It pads the values of minutes, seconds, and (tens of) milliseconds
    with zeros so that the strings are at least two characters long.
*/
    
    const valueToAdd = newValue[0];
$(`#time-display`).append(mins, secs, millisecs)
$newValue.append(`${mins, secs, millisecs}`)



}

    }
  },
  updateLapListDisplay: function(laps){
    /*
    It displays the recorded laps inside the `lap-list` element,
    representing each lap with an `<li>` element that displays the
    lap's `mins`, `secs`, and `millisecs` values (zero-padded to be at
    least two characters long, just like `time-display`). */
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){

   /* If the stopwatch is not running,
    a.  it starts the stopwatch.
  2.  If the stopwatch is already running,
    b.  it does nothing.*/


  $(`ViewEngine`).call(`updateTimeDisplay`)
  },
  handleClickStart: function() {
    if(`this.stopwatch`) {
      stopwatch.start();
    }
  },


/*  If the stopwatch is running,
  a. it stops the stopwatch.
2.  If the stopwatch is not running,
  a. it resets the stopwatch.
  b. it updates the time display so that it shows `00:00:00`.
  c. it updates the lap list display so that it is empty. */
  
  
  handleClickStopReset: function(){
    if(`this.stopwatch`) {
      stopwatch.stop();
    }
      else {
        stopwatch.reset();
      }
      updateTimeDisplay(0,0,0,);
      updateLapListDisplay();
    
    }



  },
  handleClickLap: function(){
   /* If the stopwatch is running,
    a.  it records a lap.
    b.  it updates the display of laps.
  2.  If the stopwatch is not running,
    a.  it does nothing. */

    if(`this.stopwatch`) {
      stopwatch.laps();
      updateLapListDisplay(stopwatch.laps);
    }
  };


window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
};
