let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("userscore");
const compScore_span=document.getElementById("computerscore");
const scoreboard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber = Math.floor((Math.random()*3));
    return choices[randomNumber];
}


function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML= compScore;
    const smallUserWord="(user)".fontsize(3).sub();
    const smallCompWord="(comp)".fontsize(3).sub();
    result_p.innerHTML= `${convertToWord(user)}${smallUserWord}  Beats ${convertToWord(comp)}${smallCompWord}. You Win`;
}

function lose(user, comp) {
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML= compScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML= `${convertToWord(comp)}${smallCompWord}  Beats ${convertToWord(user)}${smallUserWord}. You Lose`;
}

function draw(user, comp) {
    result_p.innerHTML= "Its a draw";
}

function gain(userChoice){
  const computerChoice = getComputerChoice();
    switch(userChoice  + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
 
gain("c");

function main(){

rock_div.addEventListener("click", function(){
    gain("r");
})
paper_div.addEventListener("click", function(){
    gain("p");
})
scissors_div.addEventListener("click", function(){
    gain("s");
})
}

main();
