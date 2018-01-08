function number_in_words(number){
    var satuan = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]
    var belasan = ["", "sebelas", "duabelas", "tigabelas", "empatbelas", "limabelas", "enambelas", "tujuhbelas", "delapanbelas, sembilanbelas"];
    var puluhan = ["","", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
    
    
    if(number === 0){
        return "";
    }else if(number >= 1000000000000){
        return number_in_words(Math.floor(number/1000000000000)) + " trilliun " + number_in_words(Math.floor(number%1000000000000)); 
    }else if(number >= 1000000000){
        return number_in_words(Math.floor(number/1000000000)) + " milyar " + number_in_words(Math.floor(number%1000000000));
    }else if(number >= 1000000){
        return number_in_words(Math.floor(number/1000000)) + " juta " + number_in_words(Math.floor(number%1000000));
    }else if(number >= 2000){
        return number_in_words(Math.floor(number/1000)) + " ribu " + number_in_words(Math.floor(number%1000));
    }else if(number > 199){
        return number_in_words(Math.floor(number/100)) + " ratus " + number_in_words(Math.floor(number%100));
    }else if(number >= 100 && number < 200){
        return "seratus " + number_in_words(Math.floor(number%100));
    }else if(number >= 1000 && number < 2000){
        return "seribu " + number_in_words(Math.floor(number%1000));
    }else if(number >= 100000 && number < 200000){
        return "seratus ribu " + number_in_words(Math.floor(number%100000));
    }else if(number >= 100000000 && number < 200000000){
        return "seratus juta " + number_in_words(Math.floor(number%100000000));
    }else if(number < 10){
        return satuan[number];
    }else if(number>10 && number<20){
        return belasan[number-10];
    }else{
        return puluhan[Math.floor(number/10)] + " "+satuan[number%10];
    }
}

console.log(number_in_words(11));
console.log(number_in_words(8695));
console.log(number_in_words(39));
console.log(number_in_words(293));
console.log(number_in_words(123));
console.log(number_in_words(6));
console.log(number_in_words(100));
console.log(number_in_words(987654321));
console.log(number_in_words(1234));
console.log(number_in_words(123456789));
console.log(number_in_words(123456));
console.log(number_in_words(99900000000000));
console.log(number_in_words(111111111));