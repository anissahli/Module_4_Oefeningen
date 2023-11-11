import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let choices = ['rock', 'paper', 'scissors'];


let scoreCom=0;
let scoreUser=0;

while(scoreCom<3&&scoreUser<3){
let userChoice=await userInput.question('Wil je rock, paper of scissors gooien?: ');
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
if(userChoice=='rock'){
    if(computerChoice=='paper'){
        scoreCom+=1;
    }
    if(computerChoice=='scissors'){
        scoreUser+=1;
    }
}else if(userChoice=='paper'){
    if(computerChoice=='rock'){
        scoreUser+=1;
    }
    if(computerChoice=='scissors'){
        scoreCom+=1;
    }
}else if(userChoice=='scissors'){ 
    if(computerChoice=='paper'){
        scoreUser+=1;
    }
    if(computerChoice=='rock'){
        scoreCom+=1;
    }
}
console.log(`\nDit was de keuze van de computer: ${computerChoice}\n`);
console.log(`Jouw score: ${scoreUser} - Score computer: ${scoreCom}\n`)

}


if(scoreCom==3){
    console.log('De computer heeft gewonnen!\n')
}else{
    console.log('Je hebt gewonnen!\n')
}



process.exit();
