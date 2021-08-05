var randomNumber1 ;
randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage = "dice" + randomNumber1 + ".png" ; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage ; // images/dice1.png - dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource) ;

var randomNumber2 ;
randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage2 = "dice" + randomNumber2 + ".png" ; // dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2 ; // images/dice1.png - dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2) ;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 1 won !"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 won !"
}

else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = " Draw !"
}
document.querySelector(".button").addEventListener("click", reloadPage )
function reloadPage() {
  document.location.reload()
}
