
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



function playGame(){
    let ComputerScore=0;
    let humanScore=0;

    
    function playRound(){
        h=getHumanChoice();
        c=getComputerChoice();
        human=h.toUpperCase();
    
        if(human == 'ROCK'){
            if(c=='Rock'){
                console.log("tie");
            }else if(c=='Paper'){
                ComputerScore++;
                console.log("you lose");
            }else{
                humanScore++;
                 console.log("you win");
            }
        }
        else if(human == 'PAPER'){
            if(c=='Rock'){
                humanScore++;
                console.log("you win");
                
            }else if(c=='Paper'){
                 console.log("tie");
                 
            }else{
                ComputerScore++;
                 console.log("you lose");
                 
            }
    
        }
        else if(human== 'SCISSORS'){
            if(c=='Rock'){
                ComputerScore++;
                 console.log("you lose");
                 
            }else if(c=='Paper'){
                humanScore++;
                console.log("you win");
                
            }else{
                console.log("its a tie!!!"); 
                
            }
        }
    }
    
    for(let i=0;i<5;i++){
        playRound();
    }
    if(humanScore>ComputerScore){
        console.log("human wins")
    }else{
        console.log("Computer wins!")
    }
}

