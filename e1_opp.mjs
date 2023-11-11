import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let zijde1= parseFloat(await userInput.question('Geef de lengte van een zijde in: '))
let zijde2= parseFloat(await userInput.question('Geef de lengte van een tweede zijde in: '))

console.log(`De oppervlakte van een rechthoek met deze afmetingen is ${zijde1*zijde2} cm.`)

process.exit();
