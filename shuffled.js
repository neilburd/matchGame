// // number must be divisible by 2
// let total = 12; // will be able to be changed by user
// // half the total to create the pairs thought it would be more understandable
// // to haf a variale than to always use total/2
// let halfT = total/2;
//
// console.log(total, halfT);
//
// // assigning an array for match pairs
// let pairs = [];
// // create an array of matching pairs
// let x=1;
// for (i=0; i<b; i++){
//   pairs.push(x,x);
//   x++;
// }
//
// console.log(pairs);
//
// /// a shuffle function to shuffle pairs
// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }
// }
// // shuffle the pairs
// shuffle(c);
// console.log(c);

/// I need to start and think more functionally and that can be refactored.
let pairs = [];

//function to test if number is Even
function isEven(n) {
  return n == parseFloat(n)? !(n%2) : void 0;
}
/// CREATE PAIRED ARRAY AT CERTAIN length
function createBoard(x){
  let Total = x;
  //let halfT = x/2;

  if (isEven(x))
    let halfT = x/2;
  }//// what to do on odd user input?????
  //// this is where i create an array of matching numbers
  let x=1;
  for (i=0; i<halfT; i++){
    pairs.push(x,x);
    x++;
  }
  shuffle(pairs);
}
/// SHUFFLE CARDS FUNCTION
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


export  { createBoard }

/// I need to create the board

  /// thinking of having adding html elements using jquery based on the number
  //  for items in the array, having a dynamicly created board would allow the
  //  user to change the board size?//// is that a good idea or just have like 3 sizes
