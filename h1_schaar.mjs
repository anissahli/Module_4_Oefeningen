import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let userChoice=await userInput.question('Wil je rock, paper of scissors gooien?: ');

let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

while(userChoice==computerChoice){
    console.log('Jullie hebben hetzelfde gegooid! Herbegin.');
    userChoice= await userInput.question('Wil je rock, paper of scissors gooien?: ');
}

console.log(`\nDit was de keuze van de computer: ${computerChoice}\n`);

if(userChoice=='rock'){
    if(computerChoice=='paper'){
        console.log('De computer heeft dus gewonnen!')
    }
    if(computerChoice=='scissors'){
        console.log('Je hebt dusgewonnen!')
    }
}else if(userChoice=='paper'){
    if(computerChoice=='rock'){
        console.log('Je hebt dus gewonnen!')
    }
    if(computerChoice=='scissors'){
        console.log('De computer heeft dus gewonnen!')
    }
}else if(userChoice=='scissors'){ 
    if(computerChoice=='paper'){
        console.log('Je hebt dus gewonnen!')
    }
    if(computerChoice=='rock'){
        console.log('De computer heeft dus gewonnen!')
    }
}else{
    console.log('Niet geldig, herbegin.')
}



process.exit();
