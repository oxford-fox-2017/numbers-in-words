const ANGKA_UTAMA = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];
const ANGKA_UTAMA_GABUNGAN = ['', 'se', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];

const IMBUHAN = ['', 'belas ', 'puluh ', 'ratus '];
const IMBUHAN_3 = ['ribu ', 'juta ', 'miliar ', 'triliun '];

function in_words(angka){
    var arrStringAngka = (String(angka)).split('');
    var totalAngka = arrStringAngka.length;

    if(totalAngka == 1 || (totalAngka == 2 && arrStringAngka[0] == '1')){
        // kalau satuan atau belasan
        return totalAngka == 1 ? ANGKA_UTAMA[angka] : ANGKA_UTAMA_GABUNGAN[1] + IMBUHAN[1];
    }
    else{
        var result1 = ANGKA_UTAMA_GABUNGAN[arrStringAngka[0]] + IMBUHAN[totalAngka];

        arrStringAngka.shift();
        var newAngka = parseInt(arrStringAngka.join(''));

        var result2 = in_words(newAngka);

        return result1+result2;
    } 
}

console.log(in_words(4)); // empat
console.log(in_words(11)); // sebelas
console.log(in_words(27)); // dua puluh tujuh
console.log(in_words(102)); // seratus dua
console.log(in_words(111)); // seratus sebelas