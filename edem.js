var number1 = 1;
var number2 = 9;

var operation = "+";
// var operation = '-';
// var operation = '*';
// var operation = '/';
var result = 0;

if (operation === "+") {
    result = number1 + number2
// } else if (operation === "-") {
//     result = number1 - number2 
// } else if(operation === '*') {
//     result = number1 * number2
// } else if (operation === "/") {
//     result = number1 /number2
} else {
    console.log('syntax error');
}

console.log(result);
