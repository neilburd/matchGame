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
    // console.log(pairs);

    for (i = 0; i < pairs.length; i++){
      // console.log(i);
      $(".game").append(`<div class="item" data-gridSize="${pairs[i]}">${pairs[i]}</div>`)
    }
  });

  let match = null;

////ALL THE CLICK AND GAME PLAY

  $(".game").on("click",".item",function(){
    let $this = $(this);
    let number = $this.attr('data-gridSize');

    console.log($this);
    $this.addClass('.reveal');

    if (match === null){
      match = number;
      //make this square unclickable after clicked once
    } else if (match === number) {
      console.log("match");
      //this is where i put the actions for a match

      match = null;
    } else {
      console.log('NO match');
      /// this is where I put the actions for no match

      match = null;
    }

  })

  function isMatch(a,b){
    if (a === b){
      return true
    }
    else return false
  }


  function clearAll() {

    // console.log("remove" + i);
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
