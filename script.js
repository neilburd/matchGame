$(document).ready(function() {

  let pairs = [];

  //function to test if number is Even
  function isEven(n) {
    return n == parseFloat(n)? !(n%2) : void 0;
  }
  /// CREATE PAIRED ARRAY AT CERTAIN length
  function createBoard(x){
    let total = x;
    let halfT;

    if (isEven(x))
      halfT = total/2;
      let x=1;
      for (i=0; i < halfT; i++){
        pairs.push(x,x);
        x++;
      }
    }


    shuffle(pairs);


  function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
  }


  for (i = 1; i < 17; i++){
    console.log(i);
    $(".game").append(`<div class="item">${i}</div>`)

  }

});
