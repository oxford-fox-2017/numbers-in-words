function in_words(num){
    let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh','sebelas'];
    let puluhan = ['belas', 'puluh', ''];

    let temp = '';

    if ( num < 12){
        return satuan[num];
    }else if ( num >=12 || num <=19){
        return satuan[num.toString()[1]] + ' ' + puluhan[0];
    }
}


console.log(in_words(12));