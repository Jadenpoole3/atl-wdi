// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  price *= 100;
  payment *= 100;
  // Write a function that can make correct change, given a purchase price and an amount paid.
//denoinations
//return an array like [Q,D,N,P]

let Change = payment - price 

 let changeLeft= Math.round(payment * 100 -price * 100);
if(changeLeft <= 0) {return[0,0,0,0] 
} else {

  const quarters = Math.floor(change / 25);
  change = change % 25


  const dimes = Math.floor(change / 10);
  change = change % 10



  const nickels = Math.floor(change / 5);
  change = change % 5



  const pennies = change;


}
return [quarters,dimes,nickels, pennies];
/* Here's an example of how this should work.
Say we want to buy something for $5.60, and we pay $6.00;
we should get back 1 quarter, 1 dime, and 1 nickel. If the item was, instead,
$5.62, we would get back 1 quarter, 1 dime, and 3 pennies.

```js
makeChange(5.60, 6.00) // => [1, 1, 1, 0]
makeChange(5.62, 6.00) // => [1, 1, 0, 3]
//                            Q, D, N, P
*/




};
return results
make

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
