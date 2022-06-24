// Scores
let playerScore = 0;
let compScore = 0;

//variable to be passed as argument in the main function
let playerPlays; 
let compPlays;

//buttons and main-headtohead in the HTML
const buttons = document.querySelectorAll(".button");
const playerPick = document.querySelector(".player-played");
const compPick = document.querySelector(".computer-played");
const versus = document.querySelector(".versus-pic");
const startG = document.querySelectorAll(".start")

//Array of items to be played by the computer through random pick
const gunsArray = ["rock", "paper", "scissors"]

//adding click event in buttons and weaponOfChoice & calling the main functions
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(compPick.classList.contains("rock") || compPick.classList.contains("paper") ||
         compPick.classList.contains("scissors")) {
            compPick.classList.remove("rock","paper","scissors");
        };
        if(playerPick.classList.contains("rock") || playerPick.classList.contains("paper") ||
         playerPick.classList.contains("scissors")){
            playerPick.classList.remove("rock","paper","scissors");
        };
        if (versus.lastElementChild.tagName === "DIV") {
            versus.removeChild(versus.lastElementChild);
            
        };
        const img = button.querySelector("img");
        playerPlays = img.alt;
        setTimeout(playerAddClass, 2000)
        compPlays = gunsArray[Math.floor(Math.random() * gunsArray.length)];
        setTimeout(compAddClass, 2000)
        console.log("Player: " + playerPlays); //for checking only, optional
        console.log("Computer: " + compPlays); //same as above
        playRound(playerPlays,compPlays);
        setTimeout(scoreUpdateP, 3000);
        setTimeout(scoreUpdateC, 3000);
        if(playerScore === 5 || compScore ===5){
            winner()
        };
    })
})

//add click events to start and try again button
startG.forEach((start) => {
    start.addEventListener("click", () => {
        if(document.querySelector("title").innerHTML === "ROCK PAPER SCISSZZZ!!"){
            startGame();
        } else {
            startMenu();
        };      
    })  
})



// main function for the game
function playRound(playerPlayed,compPlayed){
    if((playerPlayed === "rock" && compPlayed === "scissors") ||
     (playerPlayed === "scissors" && compPlayed === "paper") ||
     (playerPlayed === "paper" && compPlayed === "rock")) {
        playerScore++;
     } else if(playerPlayed === compPlayed) {
        console.log("tie");
        const greet = document.createTextNode("Its a TIE!");
        versus.innerHTML += `<div class="text-cont"></div>`;
        const newDiv = document.querySelector(".text-cont");
        newDiv.style.backgroundColor = "goldenrod"; 
        setTimeout(() => newDiv.appendChild(greet),2000);
     } else {
        compScore++;
     }
}

//update score function
function scoreUpdateP(){
    document.querySelector("#player-score").innerHTML =`Score: ${playerScore}` 
}

function scoreUpdateC(){
    document.querySelector("#comp-score").innerHTML =`Score: ${compScore}` 
}


//player and computer add class function for styling css
function playerAddClass(){
    playerPick.classList.add(`${playerPlays}`);
}

function compAddClass(){
    compPick.classList.add(`${compPlays}`);
}

//After scoring 5 this function declares winner and goes to game over screen
function winner(){
    if(playerScore > compScore) {
        const greet = document.createTextNode("YOU WIN!!LETS FCKIN GO!!");
        setTimeout(() => versus.appendChild(greet), 3000);
        setTimeout(gameOver, 8000);

    } else {
        const greet = document.createTextNode("YOU LOSE. TRY AGAIN");
        setTimeout(() => versus.appendChild(greet), 3000);
        setTimeout(gameOver, 8000);
    }
}

//function to start, reset and game-over screen

function startGame(){
    window.location.href = "gameScreen.html";
}

function startMenu(){
    window.location.href = "index.html";
}

function gameOver(){
    window.location.href = "resetScreen.html";
}



