function in_words(num){
    var kamus = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

    if(num < 12){
        return kamus[num]
    }   else if (num < 20){
        return in_words(num % 10) + " belas";
    }   else if (num < 100){
        return in_words(Math.floor(num / 10)) + " puluh " + in_words(num % 10);
    }   else if (num < 200){
        return "seratus " + in_words(num % 100);
    }   else if (num < 1000){
        return in_words(Math.floor(num / 100)) + " ratus " + in_words(num % 100);
    }   else if (num < 2000){
        return "seribu " + in_words(num % 1000);
    }   else if (num < 1000000){
        return in_words(Math.floor(num / 1000)) + " ribu " + in_words(num % 1000);
    }   else if (num < 1000000000){
        return in_words(Math.floor(num / 1000000)) + " juta " + in_words(num % 1000000);
    }   else if (num < 1000000000000){
        return in_words(Math.floor(num / 1000000000)) + " milyar " + in_words(num % 1000000000);
    }   else if (num < 1000000000000000){
        return in_words(Math.floor(num / 1000000000000)) + " trillion " + in_words(num % 1000000000000);
    }
    
        
}

// console.log(in_words(4)); 
// console.log(in_words(19)); 
// console.log(in_words(27)); 
// console.log(in_words(99)); 
// console.log(in_words(102)); 
// console.log(in_words(317));
// console.log(in_words(817)); 
// console.log(in_words(1317)); 

// console.log(in_words(3279)); 
// console.log(in_words(38079)); 
// console.log(in_words(781569)); 
// console.log(in_words(1237845)); 
// console.log(in_words(82102713)); 
// console.log(in_words(1234567)); 
// console.log(in_words(12345678)); 
console.log(in_words(123456789)); 
console.log(in_words(182102713)); 
console.log(in_words(123456789123)); 
console.log(in_words(18210271334567)); 