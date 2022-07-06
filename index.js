var randomNumber1 = Math.random() ;
randomNumber1 = randomNumber1 * 6 ;
randomNumber1 = Math.floor(randomNumber1) + 1 ;

var address1 = "images\\dice"+randomNumber1+".png";

var randomNumber2 = Math.random() ;
randomNumber2 = randomNumber2 * 6 ;
randomNumber2 = Math.floor(randomNumber2) + 1 ;

var address2 = "images\\dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",address1);

document.querySelector(".img2").setAttribute("src",address2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML = "Draw!";
}
