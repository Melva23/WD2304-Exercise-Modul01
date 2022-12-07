// Exercise Day-04


//Soal No.1
let height1 = 4; 
function triangle(height) {
    let value = 1;
    let result = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j <= i; j++) {
            if(value > 9) {
                result += value++ +" ";
            } else {
                result += "0" + value++ +" ";
            }
        }
        result += "\n";
    }
    return result;
}

let heightA1 = triangle(4);
console.log(heightA1);


//soal No.2 
let j = 15;

function FizzBuzz(n) {
    let result = ""

    for (i = 1; i <= n; i++) {
        
        if (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz"
        } else if (i % 3 == 0) {
            result += "Fizz"
        } else if (i % 5 == 0) {
            result += "Buzz"
        } else {
            result += i 
        }
        result += "\n"

        // console.log(result)
    }
    return result
}

console.log(FizzBuzz(j))



// soal No.3
let weight; 
let height;
//fungsi rumus bmi nya masukkan ke dalam function

const BMI = function (weight,height)
{
    let text = "";
    result = weight / (height **2);
    if(result < 18.5) {
        return message = "less weight";
    } else if ( result > 18.5 && result < 24.9) {
        return message = "ideal";
    } else if (result > 25.0 && result < 29.9) {
        return message = "overweight";
    } else if ( result > 30.0 && result < 39.9) {
        return message = "very overweight";
    } else if (result >= 39.9) {
        return message = "obesity";
    }
}
console.log(BMI(55.0, 1.50))


//soal No.4 
function removeOdd(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2) {
            numbers.splice(i, 1);
        }
    }
    return numbers;
}
let nomer = removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(nomer)


//soal No.5 
// let kalimat = "Hello World";
// let a = kalimat.split(" ").sort();
// console.log(a)
// NOMER 5 jangan pake split bawaan dari javascript , cukup sampai menghilangkan spasi 

// const splitString =(str) => {
//     let outputArr = [];
//     let temp = "";
//     for(var i = 0, i <= str.length; i++) {
//         if (str [i] !== " ") {
//             temp += str[i];
//         } else {
//             outputArr.push(temp);
//             temp = "";
//         }
//     }
//     return outputArr;
// }

// const testString = "Hello World";
// console.log(splitString(testString));


