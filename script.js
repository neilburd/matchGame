// number must be divisible by 2
let total = 12; // will be able to be changed by user
// half the total to create the pairs thought it would be more understandable
// to haf a variale than to always use total/2
let halfT = total/2;

console.log(total, halfT);

// assigning an array for match pairs
let pairs = [];
// create an array of matching pairs
let x=1;
for (i=0; i<b; i++){
  pairs.push(x,x);
  x++;
}

console.log(pairs);

/// a shuffle function to shuffle pairs
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
// shuffle the pairs
shuffle(c);
console.log(c);
