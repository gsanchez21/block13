//param1A	param1B	param2A	param2B	Expected Print
//"cat"	"cat"	6	"6"	true
//"five"	5	"dog"	"dawg"	false
//0	false	"horse"	"horse"	true
//"eight"	"eight"	"ate"	"ate"	true
//11	"eleven"	"four"	"for"	false
//"cake"	"cake"	"pie"	"pie"	true


// Declared variables 
let param1A = 'cat'
let param1B = 'cat'
let param2A = 6
let param2B = '6'
const print1 = 'True'
const print2 = 'False'

//One of two comparision need to equal to print true.
if (param1A === param1B || param2A === param2B){
    console.log(print1);
}else {
    console.log(print2);
}
//Replaced variables and repeated the if/else statement
param1A = 'five'
param1B = 5
param2A = 'dog'
param2B = 'dawg'

if (param1A === param1B || param2A === param2B){
    console.log(print1);
}else {
    console.log(print2);
}
//Replaced variables and repeated the if/else statement
param1A = 0
param1B = 'flase'
param2A = 'horse'
param2B = 'horse'

if (param1A === param1B || param2A === param2B){
    console.log(print1);
}else {
    console.log(print2);
}
//Replaced variables and repeated the if/else statement
param1A = 'eight'
param1B = 'eight'
param2A = 'ate'
param2B = 'ate'

if (param1A === param1B || param2A === param2B){
    console.log(print1);
}else {
    console.log(print2);
}
//Replaced variables and repeated the if/else statement
param1A = 11 
param1B = 'eleven'
param2A = 'four'
param2B = 'for'

if (param1A === param1B || param2A === param2B){
    console.log(print1);
}else {
    console.log(print2);
}
//Replaced variables and repeated the if/else statement
param1A = 'cake' 
param1B = 'cake'
param2A = 'pie'
param2B = 'pie'

if (param1A === param1B || param2A === param2B){
    console.log(print1);
}else {
    console.log(print2);
}
