window.onload=function() {

    // checking that JS file is attached to HTML 
    //console.log("Javascript is working!");


      var flippedCards = [];//nothing flipped yet
      dealDeck();


      function dealDeck() {

        var cardsInPlay = document.getElementsByClassName('card'); //getting all the card divs
        var pics = ["url('munch1.png')", "url('munch2.png')", "url('munch3.png')",
                    "url('munch1.png')", "url('munch2.png')", "url('munch3.png')",
                    "url('munch1.png')", "url('munch2.png')", "url('munch3.png')",
                    "url('munch1.png')", "url('munch2.png')", "url('munch3.png')",
                    "url('munch1.png')", "url('munch2.png')", "url('munch3.png')",
                    "url('munch1.png')"];
        //pics.shuffle; 
        for (let i = 0; i<cardsInPlay.length; i++) { //iterate through cards
          cardsInPlay[i].querySelector('.front').style.backgroundImage = pics[i];
          cardsInPlay[i].querySelector('.back').style.backgroundImage = "url('cardback.png')";
          cardsInPlay[i].addEventListener('click', function card () {

              flip(cardsInPlay[i]);
              cardsInPlay[i].querySelector('div .card .back').style.display = "none";
              cardsInPlay[i].querySelector('div .card .front').style.display = "block";
               }
               );
          }
        }

        

    function flip(card) {
        //if cards are not flipped and the number of cards is less then two.
          if (!card.classList.contains('flipped') && flippedCards.length < 2) {
            card.classList.toggle('flipped');
            flippedCards.push(card);
          }
          if (flippedCards.length === 2) { //flipped two cards
          checkMatch();
          }
        
}

      function checkMatch() {
        /*if (card.classList.contains('flipped').style.backgroundImage === 
            card.classList.contains('flipped').style.backgroundImage)
        { flippedCards ();
        }*/
          console.log(flippedCards[0].style.backgroundImage +" "+ flippedCards[1].style.backgroundImage);
          if (flippedCards[0].style.backgroundImage === 
            flippedCards[1].style.backgroundImage){     
            flippedCards[0].style.display = "none";
            flippedCards[1].style.display = "none";
            flippedCards[0].classList.toggle('flipped');
            flippedCards[1].classList.toggle('flipped');

              //flippedCards=[];
            }           
        else {flippedCards[0].classList.style.backgroundImage = "url('cardback.png')";
              flippedCards[1].classList.style.backgroundImage = "url('cardback.png')";
              flippedCards[0].classList.toggle('flipped');
              flippedCards[1].classList.toggle('flipped');
         }
         return;
    

                }

      

      //function shuffle(array)
      //Replay Game
};