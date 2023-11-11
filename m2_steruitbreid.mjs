import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte=parseFloat(await userInput.question('Hoogte: '))
let startTop=false
let startLeft=true

console.log('Output: ');


for(let i=1;i<=hoogte;i++){
    let output='';
    let ster='';
    if(startTop==true){
         if(startLeft==true){
         for(let j=1;j<=i;j++){
             output+="*";}
         }else{
            for(let j=1;j<=hoogte-i;j++){
               output+=" "; 
            }
            for (let j=1;j<=i;j++){
                ster+="*";
            }
            }
         }

    else{
        if(startLeft==true){
            for(let j=hoogte+1-i;j>=1;j--){
                output+="*";
            }
        }else{
            for(let j=1;j<=i-1;j++){
                output+=" "
            }
            for(let j=hoogte+1-i;j>=1;j--){
                ster+="*";
        }
    }     
}  

    console.log(output+ster);
}

process.exit();

