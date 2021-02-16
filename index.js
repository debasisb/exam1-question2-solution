
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var randomNumber3 = Math.floor(Math.random() * 6) + 1;

var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

//If all 3 players win
if (randomNumber1 + randomNumber2 + randomNumber3 === 7) {
    document.querySelector("h1").innerHTML = "🚩 All three are Super Winners!";
}
//If only one dice gets a 6, notify a Super Winner!
else if (randomNumber1 === 6 ) {
    document.querySelector("h1").innerHTML = "🚩 We have a Super Winner!";
}
else if (randomNumber2 === 6 ) {
    document.querySelector("h1").innerHTML = "🚩 We have a Super Winner!";
}
else if (randomNumber3 === 6 ) {
    document.querySelector("h1").innerHTML = "🚩 We have a Super Winner!";
}
else {
    document.querySelector("h1").innerHTML = "🚩 Try Again!";
}