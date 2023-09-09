// function randomRGB(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r},${g},${b})`
// }

// const letters = document.querySelectorAll('h1');
// const intervalId = setInterval(function(){
//     for (let letter of letters) {
//         letter.style.color = randomRGB();
//     }
// }, 1000);

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices= ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
}

function loss(playerChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(playerChoice) + ". You lose!";
}

function draw(playerChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = "It's a draw! Try again!";
}

function game(playerChoice) {
    const computerChoice= getComputerChoice();
    switch(playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            loss(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);              
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();