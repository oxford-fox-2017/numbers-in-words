function number_in_words(num) {
    //code here

    var oneDigit = ['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh'];
    var twoDigit = ['', 'sebelas', 'duabelas', 'tigabelas', 'empatbelas', 'limabelas', 'enambelas', 'tujuhbelas', 'delapanbelas', 'sembilanbelas', 'duapuluh'];
    var multiDigit = ['puluh', 'ratus', 'ribu', 'puluh ribu', 'ratus ribu', 'juta', 'puluh juta', 'ratus juta', 'milyar', 'puluh milyar', 'ratus milyar', 'trilyun', 'puluh trilyun', 'ratus trilyun'];

    if(num<=10){
        return oneDigit[num];
    }else if(num<=20){
        return twoDigit[num-10];
    }else if()
    
}

console.log(number_in_words(18));

