//soal No.1:
let panjang = 4;
let lebar = 7;
let area = panjang * lebar;
console.log(area);

//soal No.2:
let panjang1 = 5;
let lebar2 = 9;
const luas = panjang * lebar;
console.log (2 * area)

//soal No.3;
let d5 = 7;
let pi = 3.14;
let area1 = pi * d5 * d5
console.log(0,25 * area1);

//soal No.4:
//mencari sudut segitiga dari segitiga
let a = 90;
let b = 65;
let c = 180 - (a+b);
console.log('sudut c adalah :' + c);


//soal N0.5
let tanggal1 = new Date("2020-01-06");
let tanggal2 = new Date("2022-05-02");
let perbedaanTanggal = Math.abs(tanggal2 - tanggal1);
console.log(perbedaanTanggal);

let perbedaanHari = Math.round(perbedaanTanggal / (1000 * 3600 * 24));
console.log('perbedaan tangggal 1 dan tanggal 2 adalah ${perbedaanHari} hari');
