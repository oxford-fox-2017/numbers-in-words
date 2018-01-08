const ANGKA_UTAMA = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];
const ANGKA_UTAMA_GABUNGAN = ['', 'se', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];

const BELAS = 'belas ';
const PULUH = 'puluh ';
const RATUS = 'ratus ';
const RIBU = 'ribu ';
const JUTA = 'juta ';
const MILIAR = 'miliar ';
const TRILIUN = 'triliun ';


function in_words(angka){
    var arrStringAngka = (String(angka)).split('');
    var totalAngka = arrStringAngka.length;

    if(totalAngka == 1){
        return ANGKA_UTAMA[angka]; 
    }
    else if(totalAngka == 2){
        if(arrStringAngka[0] == '1'){
            return ANGKA_UTAMA_GABUNGAN[angka] + BELAS;
        }
        else{
            return ANGKA_UTAMA[arrStringAngka[0]] + PULUH + ANGKA_UTAMA[arrStringAngka[1]];
        }
    }
    else if(totalAngka == 3){
        return ANGKA_UTAMA_GABUNGAN[arrStringAngka[0]] + RATUS + ANGKA_UTAMA[arrStringAngka[1]] + PULUH + ANGKA_UTAMA[arrStringAngka[2]];
    }

}

console.log(in_words(4)); // empat
console.log(in_words(27)); // dua puluh tujuh
console.log(in_words(102)); // seratus dua
// in_words(38079); // tiga uluh delapan ribu tujuh puluh sembilan
// in_words(82102713); // delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas