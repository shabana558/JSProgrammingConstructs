//Read a single digit number and write the number in word
const pro = require("prompt-sync");
const prompt = pro();

let number = prompt("Enter a single digit number (0-9):");

switch(number)
{
    case '1' : 
        console.log("One");
    break;
    case '2' : 
        console.log("Two");
    break;
    case '3' : 
        console.log("Three");
    break;
    case '4':
        console.log("Four");
    break;
    case '5':
        console.log("Five");
    break;
    case '6':
        console.log("Six");
    break;
    case '7':
        console.log("Seven");
    break;
    case '8':
        console.log("Eight");
    break;
    case '9':
        console.log("Nine");
    break;
    case '0':
        console.log("Zero");
    break;
   default :
        console.log("Not a singke digit input");
   break;
}