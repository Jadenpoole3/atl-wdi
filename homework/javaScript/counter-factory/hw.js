// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
   
    /*<div class='counter' data-index='2'>
  <h3>Count: <span>0</span></h3>
  <button class='increment'> + 1 </button>
</div> */

//Build Presenter thing
// create element
 
var newElement = doucment.createElement('span');
newElement.textContent = 'new counter'
document.body.appendChild(newElement)




  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    let newCounterComponent = 
    let counterCollection = document.getCreateElement('div')
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    letCounterComponent = document.getCreateElement('id')
    
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Build Appcontrol
    
    
  },
  onClickIncrement: function(event){
    // Your Code Here
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
