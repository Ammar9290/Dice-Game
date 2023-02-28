    var randomnumber;
    randomnumber = Math.floor(Math.random()*(6)+1);
    if(randomnumber==1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(randomnumber==2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomnumber==3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomnumber==4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomnumber==5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}


var randomnumber2;
randomnumber2 = Math.floor(Math.random()*(6)+1);
if(randomnumber2==1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomnumber2==2){
document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomnumber2==3){
document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomnumber2==4){
document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomnumber2==5){
document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(randomnumber>randomnumber2){
document.querySelector("h1").innerHTML="player1 won!";}
else if(randomnumber<randomnumber2){
    document.querySelector("h1").innerHTML="player2 won!";  
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}