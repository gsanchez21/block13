//num1	num2	Expected Print
//5	6	true
//10	11	true
//0	0	false
//1000	-1000	false
//6	4	false
//5	5	true


// Declared variables 
const num1 = 5
const num2 = 6
const num3 = 10
const num4 = 11
const num5 = 0
const num6 = 1000
const num7 = -1000
const num8 = 4
const print1 = 'True'
const print2 = 'False'

// If both values are greater or equal to 5. 
//Print true. 
//Else print false.
if (num1 >= 5 && num2 >= 5){
    console.log(print1);
}else {
    console.log(print2);
}

if (num3 >= 5 && num4 >= 5){
    console.log(print1);
}else {
    console.log(print2);
}

if (num5 >= 5 && num5 >= 5){
    console.log(print1);
}else {
    console.log(print2);
}

if (num6 >= 5 && num7 >= 5){
    console.log(print1);
}else {
    console.log(print2);
}

if (num2 >= 5 && num8 >= 5){
    console.log(print1);
}else {
    console.log(print2);
}

if (num1 >= 5 && num1 >= 5){
    console.log(print1);
}else {
    console.log(print2);
}