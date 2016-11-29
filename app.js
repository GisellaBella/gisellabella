//WDI PROJECT 1 SUBMISSION BY GISELLA WALTER
window.onload=function() {
console.log("Javascript seems to be working.");

    //names must match image name exactly, in order to create card. HTML is set up to take 18 cardsInPlay only.
  var paintingsArray = ['munch1','munch1','warhol1',
                        'warhol1','warhol3','warhol3','picasso2','picasso2',
                        'frida2','frida2','roy2','roy2', 'roy3','roy3',
                        'velaquez2','velaquez1', 'velaquez2','velaquez1'];

  var totalMatches = 0; //total matches before board is cleared

  var firstClick = secondClick = null; //should reset after second click, seems to work...though i get an error.

  var firstCard = null; // tracking which paintings are clicked on by artist ID (passing through the value)
  var secondCard = null;
  var counter = 0;//Keeping track of how many cardsInPlay have been clicked in a turn

  var cardsInPlay = document.getElementsByTagName("li");
  console.log(cardsInPlay);
  var shuffledArray = shuffle(paintingsArray); //need to add some sort of shuffling method here
  for (var i = 0; i<cardsInPlay.length; i++) {
    console.log(cardsInPlay[i]);
    cardsInPlay[i].setAttribute("artistValue", shuffledArray[i]);
    cardsInPlay[i].addEventListener("click", flip);
  }

  function shuffle (cardsInPlay) { //array shuffler
    var cardsInPlayLength = cardsInPlay.length;
    var index;
    var temp;
    while (cardsInPlayLength > 0) {
      index = Math.floor(Math.random() * cardsInPlayLength);
      cardsInPlayLength--;
      temp = cardsInPlay[cardsInPlayLength];
      cardsInPlay[cardsInPlayLength] = cardsInPlay[index];
      cardsInPlay[index] = temp;
      console.log(cardsInPlay);// make sure shuffle is working by refreshing
    }

      return (cardsInPlay); // the game set up
  }

  
  function flip(){
    if(this.innerHTML.length === 0)//no cards have been turned over yet
      if (counter % 2) {//one card is turned over
        this.innerHTML = "<img src= imgs/"+this.getAttribute("artistValue")+ ".png>";
        console.log(this);
        firstClick = event.target;
        firstCard = event.target.getAttribute("artistValue");
      } else {
        this.innerHTML = "<img src= imgs/"+ this.getAttribute("artistValue")+ ".png>";
        console.log(this);
        secondClick = event.target;
        secondCard = event.target.getAttribute("artistValue");
        
        checkMatch(firstCard, secondCard);
      }
      counter++;//add turn to counter
    }
  


  function checkMatch(firstCard, secondCard) {
    if (firstCard === secondCard) {
      document.getElementById('alertMessageBox').innerHTML = '<h3>Nice!</h3>';
      totalMatches++;
      setTimeout(function(){
      document.getElementById('alertMessageBox').innerHTML = '  ';
       /* I was hoping i could get matching cards to disapppear, 
      but i couldnt figure out a way to do that. Also the message box's 
      jumpiness i intend to fix, as soon as i ask Nick how to do that. No luck on the interwebs. */
      }, 800);
      
    } else {
      document.getElementById('alertMessageBox').innerHTML = '<h3>Not a Match.</h3>'; 

      setTimeout(function(){

        $(firstClick).empty();
        /* My first foray into Jquery waters...
         it seemed the easiest way to do what i wanted. 
        I coudln't come up with a javscript solution.*/
        $(secondClick).empty();


        document.getElementById('alertMessageBox').innerHTML = '  ';
      }, 900);
    }
    console.log(totalMatches);
    if(totalMatches == 9) { setTimeout(function(){ 
    }, 300);
      alert("Winner!");
      location.reload();
    }
  }



};
