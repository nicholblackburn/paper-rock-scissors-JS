var loses = 0
var wins = 0
var buttons = document.getElementsByClassName('selection')

for (var i = 0; i < buttons.length; i++){
  buttons [i].addEventListener('click', function(e) {
    var youChose = e.target.id 
    console.log(youChose)
  })
}

var play = function(choice1, choice2) {
 if (choice1 === "paper") {
   if(choice2 === "rock") {
     return "paper wins";
   } else {
     if (choice2 === "scissors") {
       return "scissors wins";
     }
