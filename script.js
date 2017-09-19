$(document).ready(function() {

  let pairsArray = [];
  let tilesId = [];
  let matches = [];
  let tilesFlipped = 0;


  $( "form" ).submit(function( event ) {
  event.preventDefault();
  });

  $('#gridSubmit').click(function() {
    //RESET EVERYTHING
    pairsArray = [];
    tilesId = [];
    matches = [];
    tilesFlipped = 0;
    $('.game').empty();

    // get the size of the board
    let boardSize = $("input[name='gridSize']:checked").val();
    // shuffle the array and fill the game div with the items
    shuffleArray(boardSize);
    for (i = 0; i < pairsArray.length; i++){
      // console.log(i);
      $(".game").append(`<div class="item" data-gridSize="${pairsArray[i]}">${pairsArray[i]}</div>`)
    }
  });

////ALL THE CLICK AND GAME PLAY

  $(".game").on("click",".item",function(){

    let $this = $(this);
    let number = $this.attr('data-gridSize');

    console.log($this);
    $this.addClass('reveal');

    // tilesId = [];
    // matches = [];
    // tilesFlipped = 0;

    // //make this square unclickable after clicked once
    // $this.click(false);


    ////CHECK FOR MATCH
    /// if htere are less than 2 in the match arrray
    if (matches.length < 2){

      if (matches.length === 0){
        matches.push(number);
        /// do I need the ID
        console.log("first item")
      } else if (matches.length === 1){
        matches.push(number);
        /// do I need the ID
        console.log("second item")
        if (matches[0] === matches[1]){
          tilesFlipped +=2;
          matches = [];
          console.log("MATCH")
          if (tilesFlipped === pairsArray.length){
            alert("YOU WON");
          }
        } else {
          matches = [];
          console.log("NO MATCH")
        }
      }


    }
  });
  //   ///// MATCH /////
  //   else if (match === number) {
  //     //this is where i put the actions for a match
  //
  //     console.log("second click ---- match");
  //     ///make this one unclickable
  //     $this.click(false);
  //
  //     $('.item').each(function(index, val) {
  //       ///val is the entire html line
  //
  //       console.log($(this).attr('data-gridSize'));
  //       if ($(this).attr('data-gridSize') === number){
  //         //add class to all the items that match the number??
  //         $(this).addClass('match');
  //       }
  //
  //     });
  //
  //     match = null;
  //   } else {
  //     console.log('second click ----- NO match');
  //     /// this is where I put the actions for no match
  //     // will have to rebind the click to each item
  //
  //     match = null;
  //   }
  //
  // })




  function clearAll() {
    pairsArray = [];
  }
  //function to test if number is Even
  function isEven(n) {
    return n == parseFloat(n)? !(n%2) : void 0;
  }
  /// CREATE PAIRED ARRAY AT CERTAIN length
  function shuffleArray(total){

    let halfT;

    if (isEven(total))
      halfT = total/2;
      let x=1;
      for (i=0; i < halfT; i++){
        pairsArray.push(x,x);
        x++;
      }

      shuffle(pairsArray);

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
