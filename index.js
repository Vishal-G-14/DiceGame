var randomNumber1 = Math.floor(Math.random()*6) + 1;

var imgsource = "dice" + randomNumber1 + ".png";
var imgsourcerandom = "images/"+ imgsource;

document.querySelectorAll("img")[0].setAttribute("src", imgsourcerandom);

var randomNumber2 =  Math.floor(Math.random()*6) + 1;

var imgsourcerandom1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgsourcerandom1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw 🚩"
}