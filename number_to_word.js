function in_words(num){
    let digit = [[''],['satu'],['dua'],['tiga'],['empat'],['lima'],['enam'],['tujuh'],['delapan'],['sembilan'],['sepuluh'],['sebelas']];
    if( num < 12){
        return digit[num].toString();
    }else if ( num < 20 ){
        return digit[num.toString()[1]].toString() + ' belas ';
    }else if ( num < 100){
        return digit[num.toString()[0]].toString() + ' puluh ' + digit[num.toString()[1]].toString(); 
    }else if ( num === 100){
        return 'seratus';
    }else if ( num < 200){
        return 'seratus ' + digit[num.toString()[1]].toString() + ' puluh ' + digit[num.toString()[2]].toString();
    }
    else if ( num < 1000){
        return digit[num.toString()[0]].toString() + ' ratus ' + digit[num.toString()[1]].toString() + ' puluh ' + digit[num.toString()[2]].toString(); 
    }
    
}

console.log(in_words(999));