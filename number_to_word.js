function in_words(num){
    let satuan = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan','Sepuluh','Sebelas'];

    if ( num < 12){
        return satuan[num];
    }else if ( num >= 12 && num <=19){
        return satuan[num%10] + ' Belas';
    }else if ( num >= 20 && num <= 99){
        return in_words(Math.floor(num/10)) +  ' Puluh ' + satuan[num%10];
    }else if ( num >= 100 && num <= 199){
        return 'Seratus ' + in_words(num %100);
    }else if ( num >= 200 && num <= 999){
        return in_words(Math.floor(num/100)) + ' Ratus ' + in_words(Math.floor(num/10));
    }
}


console.log(in_words(999));