const inwords = (angka) => {
    const early = ['' ,'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 
                    'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    const amplifier = ['', '', 'puluh', 'ratus', 'ribu', 'puluh ribu', 'ratus ribu', 'juta', 
          'puluh juta', 'ratus juta', 'milyar', 'puluh milyar', 'ratus milyar', 'triliun', 'puluh triliun', 'ratus triliun'];
    const amplifier2 = ['', '', 'puluh', 'ratus', 'ribu', 'puluh', 'ratus', 'juta',
          'puluh', 'ratus', 'milyar', 'puluh', 'ratus', 'triliun', 'puluh', 'ratus'];

    if (angka < 20) {
        return early[angka]
    } else {
        let angkastring = String(angka);
        let depan = early[+angkastring[0]] + ' '
        if (angkastring.length %3 === 1 || (angkastring.length%3 === 2 && +angkastring[1] === 0) 
        || (angkastring.length%3 === 0 && +angkastring[1] === 0 && +angkastring[2] === 0) ) {
            depan += amplifier[angkastring.length]
        } else {
            depan += amplifier2[angkastring.length]
        }
        if (+angkastring.slice(0,2) < 20 && angkastring.length%3 === 2) {
          depan = early[+angkastring.slice(0,2)] + ' ' + amplifier[angkastring.length-1]
          return depan + ' ' + inwords(+angkastring.slice(2))
         }
         if (angkastring.length < 7 && depan.slice(0,5) === "satu ") depan = depan.replace("satu ", "se");
         if (depan.slice(0,10) === "satu ratus") depan = depan.replace("satu ratus", "seratus"); 
        return depan + ' ' + inwords(+angkastring.slice(1))
    }
    
}


console.log(inwords(1231312312))
