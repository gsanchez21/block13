const input = 'I am a string';
const valueInput = 'I am a string';
const valueNull = 'null';
const valueUndefined = 'undefined';
const valueNum = '0';
const valueNothing = '';

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

