$(document).ready(function() {

  let pairsArray = [];
  let tilesId = [];
  let matches = [];
  let tilesFlipped = 0;


  $( "form" ).submit(function( event ) {
  event.preventDefault();
  });


  //$('#gridSubmit').click(function() {
    //RESET EVERYTHING
document.getElementById('gridSubmit').addEventListener('click', gridSubmit);

function gridSubmit(){
  console.log("clicked");
}
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
      $(".game").append(`<div class="item" id="tileId_${i}" data-gridSize="${pairsArray[i]}">${pairsArray[i]}</div>`)
    }
  });

////ALL THE CLICK AND GAME PLAY

  $(".game").on("click",".item",function(){

    let $this = $(this);
    let number = $this.attr('data-gridSize');
    let tile_Id = event.target.id;

    //console.log(event.target.id);

    $this.addClass('reveal');

    ////CHECK FOR MATCH
    /// if htere are less than 2 in the match arrray
    if (matches.length < 2){

      if (matches.length === 0){
        matches.push(number);
        tilesId.push('#' + tile_Id);

        console.log("first item")

      } else if (matches.length === 1){
        matches.push(number);
        tilesId.push('#' + tile_Id);

        console.log("second item");
        ///MATCH
        if (matches[0] === matches[1]){
          tilesFlipped +=2;

          matches = [];
          tilesId = [];

          console.log("MATCH")
          /// CHECK FOR END OF GAME
          if (tilesFlipped === pairsArray.length){
            alert("YOU WON");
          }
        }
        //// NO MATCH
        else {

          setTimeout(flipBack,500);

          console.log(tilesId);
        }
      }


    }
  });

  function flipBack(){
    console.log("flip Back");
    //console.log(tilesId[0]);
    $(tilesId[0]).removeClass('reveal');

    //console.log(tilesId[1]);
    $(tilesId[1]).removeClass('reveal');

    matches = [];
    tilesId = [];

  }

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
