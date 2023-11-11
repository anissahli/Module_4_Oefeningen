import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer= parseFloat(await userInput.question('Geef een nummer in: '))

for(let i=1;i<=nummer;i++){
 let output='';
    for(let j=1;j<=i;j++){
        output+=i;
    }
    console.log(output);
}

process.exit();

