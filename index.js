/*

Pseudocode

1. buat kamus spesial dengan nama 'bilang'
2. buat kondisi angka dibawah 20, karena perlu ditambah belas
3. buat kondisi angka dibawah 100, karena perlu ditambah puluh pada rekrusif ini
4. buat kondisi angka dibawah 200, karena perlu ditambah seratus pada rekrusif ini
5. buat kondisi angka dibawah 1000, karena perlu ditambah ratus pada rekrusif ini
6. buat kondisi angka dibawah 2000, karena perlu ditambah seribu pada rekrusif ini
7. buat kondisi angka dibawah 1000000, karena perlu ditambah ribu pada rekrusif ini
8. buat kondisi angka dibawah 1000000000, karena perlu ditambah juta pada rekrusif ini
9. buat kondisi angka dibawah 1000000000000, karena perlu ditambah miliyar pada rekrusif ini
10. buat kondisi angka dibawah 1000000000000000, karena perlu ditambah triliun pada rekrusif ini

*/

let toWords = (num) => {
    let bilang = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    if(num === 0) {
        return 'kosong';
    }
    if (num < 12) {
        return bilang[num];
    } else if (num < 20) {
        return toWords(num % 10) + ' belas'
    } else if (num < 100) {
        return toWords(Math.floor(num / 10)) + ' puluh ' + toWords(num % 10);
    } else if (num < 200) {
        return 'seratus ' + toWords(Math.floor(num % 100))
    } else if (num < 1000) {
        return toWords(Math.floor(num / 100)) + ' ratus ' + toWords(Math.floor(num % 100));
    } else if (num < 2000) {
        return 'seribu ' + toWords(Math.floor(num % 1000))
    } else if (num < 1000000) {
        return toWords(Math.floor(num / 1000)) + ' ribu ' + toWords(num % 1000);
    } else if (num < 1000000000) {
        return toWords(Math.floor(num / 1000000)) + ' juta ' + toWords(num % 1000000);
    } else if (num < 1000000000000) {
        return toWords(Math.floor(num / 1000000000)) + ' miliyar ' + toWords(num % 1000000000);
    } else if (num < 1000000000000000) {
        return toWords(Math.floor(num / 1000000000000)) + ' triliun ' + toWords(num % 1000000000000);
    }
}

console.log(toWords(0));
console.log(toWords(19));
console.log(toWords(93));
console.log(toWords(193));
console.log(toWords(999));
console.log(toWords(1799));
console.log(toWords(17995));
console.log(toWords(96512300));
console.log(toWords(965123000123));
console.log(toWords(965123000123987));