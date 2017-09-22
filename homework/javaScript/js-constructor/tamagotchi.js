console.log('tamagotchi file is loaded');

//your class declaration here


/* Write a constructor function for a Tamagotchi
Using `this.propertyName = value`, add `foodInTummy`, `restedness`, and `health` as properties and set each of the values to 10. */

class Tamagotchi {
    constructor() {
this.foodInTummy = 10;
this.restedness = 10;
this.health = 10;
}
/* Add in a method called `cry`. 
The `cry` function should reduce `foodInTummy` by 1, 
console.log the new value of `foodInTummy`, and console.log "WAHH!!!". */
cry() {
    this.foodInTummy -= 1
}


}
//create new Tamagotchis


//test out your Tamagotchies below via console.logs
