const inwords = (angka) => {
    const early = ['' ,'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 
                    'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];

    if (angka < 20) {
        return early[angka]
    } else if (angka <100) {
        return inwords(Math.floor(angka/10)) + " puluh " + inwords(angka%10);
    } else if (angka < 200) {
        return 'seratus ' + inwords(Math.floor(angka%100));
    } else if (angka < 1000) {
        return inwords(Math.floor(angka/100)).trim() + ' ratus ' + inwords(angka%100);
    } else if (angka < 2000) {
        return 'seribu ' + inwords(angka%1000);
    } else if (angka < 10000000) {
        return inwords(Math.floor(angka/1000)).trim() + ' ribu ' + inwords (angka%1000);
    } else if (angka < 1000000000) {
        return inwords(Math.floor(angka/1000000)).trim() + ' juta ' + inwords(angka % 1000000);
    } else if (angka < 1000000000000) {
      return inwords(Math.floor(angka / 1000000000)).trim() + ' miliar ' + inwords(angka % 1000000000);
    } else if (angka < 1000000000000000) {
        return inwords(Math.floor(angka/1000000000000)).trim() + ' triliun' + inwords(angka % 1000000000000);
    }
}
//tests

console.log(inwords(4)) // "empat"
console.log(inwords(14)); // "empat belas"
console.log(inwords(27)) // "dua puluh tujuh"
console.log(inwords(102)); // "seratus dua"
console.log(inwords(125)); // "seratus dua puluh lima"
console.log(inwords(352)); // "tiga ratus lima puluh dua"
console.log(inwords(1000)); // "seribu"
console.log(inwords(1352)); // "seribu tiga ratus lima puluh dua"
console.log(inwords(4352)); // "empat ribu tiga ratus lima puluh dua"
console.log(inwords(100079)); // "tiga puluh delapan ribu tujuh puluh sembilan"
console.log(inwords(13079)); // "tiga puluh delapan ribu tujuh puluh sembilan"
console.log(inwords(820102713)); // "delapan puluh dua juta seratus dua ribu tujuh"
console.log(inwords(82122713000)); // "delapan puluh dua miliar seratus dua puluh dua juta tujuh ratus tiga belas ribu"
console.log(inwords(999000000000000)); // "sembilan ratus sembilan puluh sembilan triliun"
console.log(inwords(1231312312))



    //     let angkastring = String(angka);
    //     let depan = early[+angkastring[0]] + ' '
    //     if (angkastring.length %3 === 1 || (angkastring.length%3 === 2 && +angkastring[1] === 0) 
    //     || (angkastring.length%3 === 0 && +angkastring[1] === 0 && +angkastring[2] === 0) ) {
    //         depan += amplifier[angkastring.length]
    //     } else {
    //         depan += amplifier2[angkastring.length]
    //     }
    //     if (+angkastring.slice(0,2) < 20 && angkastring.length%3 === 2) {
    //       depan = early[+angkastring.slice(0,2)] + ' ' + amplifier[angkastring.length-1]
    //       return depan + ' ' + inwords(+angkastring.slice(2))
    //      }
    //      if (angkastring.length < 7 && depan.slice(0,5) === "satu ") depan = depan.replace("satu ", "se");
    //      if (depan.slice(0,10) === "satu ratus") depan = depan.replace("satu ratus", "seratus"); 
    //     return depan + ' ' + inwords(+angkastring.slice(1))
    // }

