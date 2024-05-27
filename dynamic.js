
console.log("Hello World!")

let ComputerScore=0;
let humanScore=0;

function getComputerChoice(){
    let choice;

    choice= Math.floor(Math.random() * 3);

    if(choice==0){
        choice="Rock"
    }else if(choice==1){
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

function playRound(h,c){
    human=h.toUpperCase()

    if(human == 'ROCK'){
        if(c=='Rock'){
            return "tie"
        }else if(c=='Paper'){
            ComputerScore++;
            return "you lose"
        }else{
            humanScore++;
            return "you win"
        }
    }
    else if(human == 'PAPER'){
        if(c=='Rock'){
            humanScore++;
            return "you win";
        }else if(c=='Paper'){
            return "tie";
        }else{
            ComputerScore++;
            return "you lose"
        }

    }
    else{
        if(c=='Rock'){
            ComputerScore++;
            return "you lose";
        }else if(c=='Paper'){
            humanScore++;
            "you win";
        }else{
            "its a tie!!!"   
        }
    }
}

