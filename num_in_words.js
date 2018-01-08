/*
buat function in_words dengan parameter integer
buat kamus kata angka terdiri dari satuan, puluhan, ratusan
set kata sebagai string kosong
jika integer > 999 return 'angka terlalu besar'
jika integer<20 tambahkan satuan[integer] kedalam kata
jika integer<100 tambahkan puluhan [integer/10 lalu bulatkan kebawah] + satuan[integer] kedalam kata
jika integer<1000 tambahkan ratusan [integer/100 bulatkan kebawah] + recursive in_words(integer modulus 100)
*/

function in_words(integer){
    const satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas',
    'dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];
    const puluhan = ['','','dua puluh', 'tiga puluh','empat puluh','lima puluh','enam puluh','tujuh puluh','delapan puluh','sembilan puluh'];
    const ratusan = ['','seratus','dua ratus','tiga ratus','empat ratus','lima ratus','enam ratus','tujuh ratus','delapan ratus','sembilan ratus'];
    let kata ='';

    if(integer>999){
        return ' Angka terlalu besar!!';
    }
    else if(integer<20){
        kata+= satuan[integer];
    }
    else if(integer<100){
        kata+= puluhan[Math.floor(integer/10)] +' '+ satuan[integer % 10];
    }
    else if(integer<1000){
        kata+=ratusan[Math.floor(integer/100)]+' '+ in_words(integer % 100);
    }
    return kata;
}

console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(324));
console.log(in_words(38079));
console.log(in_words(82102713));

