// display the multiplication table of a given integer
let n = 9;
for(let i = 1; i <= 10; ++i)
console.log(n + "*" + i);


// Check whether a string is a palindrome or not
let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
};

console.log("Is Palindrome? :" + checkPalindrome("ada"));
console.log("Is Palindrome? :" + checkPalindrome("apel"));

// convert centimeter to kilometer
let cm = 1000;
const km = (cm / 100000);
console.log(`${cm} centimeter = ${km} kilometer`)

// format number as currency (IDR)
const rupiah = (number) => {
    return new Intl.NumberFormat("id-Id", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}
console.log(rupiah(1000))

//cara 2 
let num = 1000;
const formatter = new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR",
});
console.log(formatter.format(num))

const locale = num.to 

// remove the first occurrence of a given “search string” from a string
let str1 = "hello world";
let firstOccurance = "ell";
const result = str1.replace(firstOccurance, "");
console.log(result);

let strLength = str1.length;
let bool = true;
let newStr = "";

for (i = 0; i < strLength; i++) {
    if (firstOccurance != strLength[i]) {
        newStr += str1[i];
    }
}

console.log(str1);
console.log(newStr)


//capitalize first letter of each word
let str2 = "hello world";
let split = str2.split(" ");
console.log(split)

for (var i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].slice(1)
}

const res = split.join(" ");
console.log(split);


//reverse string
let str3 = "hello";

let res2 = str3.split("").reverse().join("");
console.log(str3.split(""));
console.log(str3.split())
console.log(res2);







