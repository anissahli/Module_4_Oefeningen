import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte= parseFloat(await userInput.question('Hoogte: '));
let breedte= parseFloat(await userInput.question('Breedte: '));



for(let i=1;i<=hoogte;i++){
let spatie='';
let rij=''
if(i==1||i==hoogte){
    for(let j=1;j<=breedte;j++){
         rij+="*";  
    }       
 }else{
    for(let j=1;j<=breedte-2;j++){
        spatie+=' ';
    }
    rij='*'+spatie+'*';
 }
console.log(rij);
}
process.exit();
