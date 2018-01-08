const inwords = (angka) => {
    const early = ['' ,'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 
                    'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    const amplifier = ['', '', 'puluh', 'ratus'];

    if (angka < 20) {
        return early[angka]
    } else {
        let angkastring = String(angka);
        let depan = early[+angkastring[0]] + ' ' + amplifier[angkastring.length]
        if (depan.slice(0,5) === "satu ") depan = depan.replace("satu ", "se");
        return depan + ' ' + inwords(+angkastring.slice(1))
    }
    
}


console.log(inwords(100))
