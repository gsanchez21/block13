//num1	num2	Expected Print
//50	51	"101 is greater than 100"
//99	-2	"97 is greater than 0"
//0	101	"101 is greater than 100"
//500	-500	"0 is equal to 0"
//-1000	0	"-1000 is a negative number"
//-5	0	"-5 is a negative number"

//We need to declare our variables.
//Please input your 2 values for num1 and num2.
const num1 = 5;
const num2 = 51;

// If statement will evaluate sum of num1 & num2.
// Else If statements are in place for additional sum results.
// Else statement for values not inlcuded.
if (num1 + num2 === 101){
    console.log('101 is greater than 100');
} 
else if (num1 + num2 === 97){
    console.log('97 is greater than 0');
}
else if (num1 + num2 === 0){
    console.log('0 is equal to 0');
}
else if(num1 + num2 === -1000){
    console.log('-1000 is a negative number');
}
else if(num1 + num2 === -5){
    console.log('-5 is a negative');
}
else {
    console.log('The value(s) entered are not acceptable');
}