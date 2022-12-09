
//Soal No.1
//without sort
let arrValue2 = [2, 1, 8, 9, 0];

var low = arrValue2 [0];
var high = arrValue2 [0];
var average =0;

function getWithoutSort(arr)
{ 
    const low = Math.min(...arr);
    const high = Math.max(...arr);
    let average = 0;
    sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i]
            average = sum / arr.length;
        }
        return `low = ${low}, high = ${high}, average = ${average}`
    } 
}

let getwithoutSort = (arrValue2);
console.log(getWithoutSort(arrValue2));

//with sort 
function withSort(arr) 
{
    let low = "";
    let high = "";
    let average = 0;
    let sum = 0; 
    arr.sort();
    console.log(arr); 

    low = arr[0];
    high = arr [arr.length -1];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length;
    }
    return `low = ${low}, high = ${high}, average = ${average}`;
}

console.log(withSort(arrValue2));


// Soal No.2 
let nama = ['Hiu', 'Paus', 'Ikan Pari', 'Belut'];

function combine (array) 
{
    let sentence = ""
    for(i = 0; i < array.length; i++) 
    {
        if(array[i] == array[array.length - 1]) {
            sentence += "and " + array[i]
        }
        else if(array[i] == array[array.length - 2]) {
            sentence += array[i] + " "
        }
        else{
            sentence += array[i] + ","
        }
    }
    return sentence
}

console.log(combine(nama));

//Soal No.3
let Array1 = [1,2,3];
let Array2 = [3,2,1,2];

function sumTwoArray(Arr1, Arr2) 
{
    let Array3 = []
    let length = Array1.length

    if (Arr1.length > Arr2.length) 
    {
        length = Arr1.length - 1 
    }
    else {
        length = Arr2.length - 1
    }

    for(i = 0; i < length; i++)
    {
        Array3[i] = Arr1[i] + Arr2[i];

        if (Arr1.length > Arr2.length) 
        {
            Array3[length] = Arr1[Arr1.length - 1]
        }
        else 
        {
            Array3[length] = Arr2[Arr2.length - 1]
        }
    }
    return Array3
}
console.log(sumTwoArray(Array1, Array2));

//Soal No.4
let angka =[2, 1, 8, 9, 99];

function comparison(val,Arr)
{
    for (i = 0; i < Arr.length; i++)
    {
        if (val == angka[i])
        {
            return "angka sudah ada"
        }
    }
    angka[angka.length]= val
    return angka
}

console.log(comparison(5, angka))

