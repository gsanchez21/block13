//Input Values	Expected Print
//"I am a string"	true
//false	"The boolean value false is falsy"
//null	"The null value is falsy"
//undefined	"undefined is falsy"
//0	"The number 0 is falsy (the only falsy number)"
//""	"The empty string is falsy (the only falsy string)"

//Declared variables.
//Input needs to be changed when running code with new value.
const input = 'I am a string';
const valueInput = 'I am a string';
const valueNull = 'null';
const valueUndefined = 'undefined';
const valueNum = '0';
const valueNothing = '';

//If input equals valueInput print true. 
//If not, code will run else if statements until finds true statment and prints. 
//Else statement is for input = false.
if (input === valueInput) {
    console.log('true');
} else if(input === valueNull){
    console.log('The null value is falsy');
} else if (input === valueUndefined){
    console.log('undefined is falsy');
} else if (input === valueNum){
    console.log('The number 0 is falsy (the only falsy number)');
} else if (input === valueNothing){
        console.log('The empty string is falsy (the only falsy string)');
} else {
    console.log('The boolean value is false');
}

