//https://github.com/Coolboy-786/Dice-Game/blob/main/dice1.png

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6



var randomImageSource = "https://github.com/Coolboy-786/Dice-Game/blob/main/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "https://github.com/Coolboy-786/Dice-Game/blob/main/" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML=" Player 2 Wins!! 🚩";
}
else{
  document.querySelector("h1").innerHTML=" Draw!!";
}
