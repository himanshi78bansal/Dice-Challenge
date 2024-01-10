const randomNumber1 = Math.floor(Math.random()*6)+1;
const randomNumber2 = Math.floor(Math.random()*6)+1;
const h1 = document.querySelector("h1");

console.log(randomNumber1);
console.log(randomNumber2);

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.src = `./images/dice${randomNumber1}.png`;
img2.src = `./images/dice${randomNumber2}.png`;
winner(randomNumber1, randomNumber2);

function winner(randomNumber1, randomNumber2){
    if(randomNumber1>randomNumber2){
        h1.innerText = "🚩Play 1 Wins!";
    } else if(randomNumber1<randomNumber2){
        h1.innerText = "Player 2 Wins!🚩";
    } else{
        h1.innerText = "Draw!";
    }
}