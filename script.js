$(document).ready(function() {

  let pairs = [];

  $( "form" ).submit(function( event ) {
  event.preventDefault();
  });

  $('#gridSubmit').click(function() {

    pairs = [];
    $('.game').empty();


    let boardSize = $("input[name='gridSize']:checked").val();

    // console.log(boardSize);
    createBoard(boardSize);
    console.log(pairs);

    for (i = 0; i < pairs.length; i++){
      console.log(i);
      $(".game").append(`<div class="item">${pairs[i]}</div>`)

    }

  });

  function clearAll() {

    console.log("remove" + i);
    pairs = [];
  }

  //function to test if number is Even
  function isEven(n) {
    return n == parseFloat(n)? !(n%2) : void 0;
  }
  /// CREATE PAIRED ARRAY AT CERTAIN length
  function createBoard(total){

    let halfT;

    if (isEven(total))
      halfT = total/2;
      let x=1;
      for (i=0; i < halfT; i++){
        pairs.push(x,x);
        x++;
      }

      shuffle(pairs);

    }




  function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
  }


});
