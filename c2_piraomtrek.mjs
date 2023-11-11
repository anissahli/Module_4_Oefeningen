import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte= parseFloat(await userInput.question('Hoogte: '));
let outline=true

if(outline==true){
for(let i=1;i<=2;i++){
    let top='';
    for(let j=1;j<=i;j++){
        top+='*';
    }
    console.log(top);
}
let ster='*'
for(let i=1;i<hoogte-2;i++){
    let spatie='';
    for(let j=1;j<=i;j++){
        spatie+=' ';
    }
    console.log(ster+spatie+ster)
}

for(let i=1;i<hoogte;i++){
    ster+='*';
}

console.log(ster);
}else{
    for(let i=1;i<=hoogte;i++){
        let output=''
        for(let j=1;j<=i;j++){
            output+='*'
        }
        console.log(output)
    }
}

process.exit();


