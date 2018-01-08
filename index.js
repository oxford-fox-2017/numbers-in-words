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
        var puluhan = '';
        var satuan = '';

        if(arrStringAngka[0] == '1'){
            puluhan = ANGKA_UTAMA_GABUNGAN[1] + BELAS;
        }
        else{
            puluhan = ANGKA_UTAMA[arrStringAngka[0]] + PULUH;
            satuan = ANGKA_UTAMA[arrStringAngka[1]];
        }

        return puluhan + satuan;
    }
    else if(totalAngka == 3){
        var ratusan = ANGKA_UTAMA_GABUNGAN[arrStringAngka[0]] + RATUS;
         
        var puluhan = '';
        var satuan = '';

        if(arrStringAngka[1] == '0'){
            puluhan = '';
        }
        else if(arrStringAngka[1] == '1'){
            puluhan = ANGKA_UTAMA_GABUNGAN[arrStringAngka[1]] + BELAS;
        }
        else{
            puluhan = ANGKA_UTAMA[arrStringAngka[1]] + PULUH;
            satuan = ANGKA_UTAMA[arrStringAngka[2]];
        }


        return  ratusan + puluhan + satuan;
    }

}

console.log(in_words(4)); // empat
console.log(in_words(11)); // sebelas
console.log(in_words(27)); // dua puluh tujuh
console.log(in_words(102)); // seratus dua
console.log(in_words(111)); // seratus sebelas
// in_words(38079); // tiga uluh delapan ribu tujuh puluh sembilan
// in_words(82102713); // delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas