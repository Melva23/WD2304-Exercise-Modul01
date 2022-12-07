//Exercise Day-02

// convert celcius to fahrenheit 
let c = 64;
const f = (c * 9/5) + 32;
console.log(`${c} derajat celcius = ${f} derajat fahrenheit`)

// check number is odd or even 
let num = 2;
const evenOrOdd ="";

if (num % 2) {
    console.log(`${num} is odd`);
} else {
    console.log(`${num} is even`)
}

// check number is prime or not 
let num2 = 2
let bool = true;
for (let i = 2; i < num2; i++) {
    if (num2 % i == 0){
        bool = false 
        break 
    }
}

console.log(bool ? `${num2} is prime number` : `${num2} is not a prime number`)

// find sum of the numbers 1 to n 
let num3 = 10;
let sum = 0;
let message = "";
for (let i = 1; i <= num3; i++) {
    sum += i;
    if (i != 1) {
        message += '->'
    }
    message += `${i}`;
}

console.log(`sum of the numbers ${message} = ${sum}`)

//find factorial number 
let num4 = 5;
var massage = "";
if ( num4 === 0) {
    console.log(`faktorial dari ${num4} adalah 1`);
} else {
    let fact = 1;
    for (i = 1; i<= num4; i++) {
        fact *= i;
    }
    console.log(`faktorial dari ${num4} adalah ${fact}`)
}

// print the first N fibonacci numbers

let n1 = 1, n2 =2 , nexTerm;
const number = parseInt('enter a positive number:');
console.log('fibonacci series:');
console.log(n1);
console.log(n2);

nextTerm = n1 + n2;

while (nextTerm <= number) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2
}

console.log(nextTerm);


// 8 = 0,1,,1,2,3,5,8,11

let N = 8;

let a = 0;
let b = 1;
let str = "";

for (let i = 0; i < N; i++) {
    temp = a + b;

    console.log(a);
    
    if(i != N) {
        str += ","
    }

    str += a.toString()

    a=b;
    b=temp;
}
console.log(`${N} = ${str}`)

