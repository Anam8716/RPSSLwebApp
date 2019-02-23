let userScore= 0;
let computerScore= 0;
const userScore_span = document.getElementById
("user-score");
const computerScore_span =document.getElementById
("computer-score");

const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const spock_div = document.getElementById("k");
const lizard_div = document.getElementById("l");


function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
    if(letter==="k") return "Spock";
    return "Lizard";

}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win`;
    
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord} . You lost`;
    
}
function tie(userChoice, computerChoice){
    
    
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . its a draw`;
    
}
function getComputerChoice(){
    const choices=['r','p','s','k','l'];
    const randomNumber= Math.floor(Math.random()*5);
    return  choices[randomNumber];

}


function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "rl":
        case "pk":
        case "sl":
        case "lk":
        
        
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "rk":
        case "ps":
        case "pl":
        case "sk":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "kk":
        case "ll":
            tie(userChoice,computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    
    scissors_div.addEventListener('click',function(){
        game("s");
    })

    spock_div.addEventListener('click',function(){
        game("k");
    })

    lizard_div.addEventListener('click',function(){
        game("l");
    })
}
main();








