
console.log("Hello World!")



function getComputerChoice(){
    let choice;
    let ran;
    ran= Math.floor(Math.random() * 3);

    if(ran==0){
        choice="Rock"
    }else if(ran==1){
        choice="Paper"
    }else{
        choice="Scissors"
    }
    return choice;
}

function getHumanChoice(){
    let input = prompt("pick Rock,Paper,Scissors");
    return input;
}

function playRound(human){
    const d = document.querySelector(".score")
    c=getComputerChoice();

    if(human == 'ROCK'){
        if(c=='Rock'){
            d.textContent='its a tie'
        }else if(c=='Paper'){
            d.textContent="YOU LOSE"
            return true;
        }else{
            d.textContent="YOU WIN"
            return false;
        }
    }
    else if(human == 'PAPER'){
        if(c=='Rock'){
            d.textContent="YOU WIN!"
            return true;
            
        }else if(c=='Paper'){
             d.textContent="its a tie"
             
        }else{
            d.textContent="you just lost to a machine dumbass, you dont deserve the title of human, you're the reason descartes believes in dualism."
            return false;
        }

    }
    else if(human== 'SCISSORS'){
        if(c=='Rock'){
            d.textContent="you lost goblin, thats what i say when i refer to you."
             return false;
             
        }else if(c=='Paper'){
            d.textContent="you won finally whooo"
            return true;
            
        }else{
            d.textContent="its a tie, goblin"
            
        }
    }
}

function playGame(){
    let ComputerScore=0;
    let humanScore=0;

    playRound()
}

const r = document.querySelector(".rock")
const p = document.querySelector(".paper")
const s = document.querySelector(".scissors")


let compScore=0
let humScore=0

r.addEventListener("click", function(){
    let rock ="ROCK"
    let winner = playRound(rock) 
    if(winner==1){
        humScore++;
    }
    else{
        compScore++
    }
    checkWinner()
})
 p.addEventListener("click",function(d){
    let paper ="PAPER"
    let winner = playRound(paper,d) 
    if(winner==1){
        humScore++;
    }
    else{
        compScore++
    }
    checkWinner()
 })
 s.addEventListener("click",function(d){
    let scissors ="SCISSORS "
    let winner = playRound(scissors,d) 
    if(winner==1){
        humScore++;
    }
    else{
        compScore++
    }
    checkWinner()
 })
 const screen = document.querySelector(".screen")
 const newt = document.createElement("div")
 screen.appendChild(newt)

 function checkWinner(){
    if(humScore==5){
        newt.textContent="you won";
        
     }
     if(compScore==5){
        newt.textContent="you lost"
     }
 }



