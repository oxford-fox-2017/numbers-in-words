function in_words(num){

    let huruf = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan']

    if(num === 0){
        return huruf[num]
    } else if(num === 1){
        return huruf[num]
    } else if (num === 2){
        return huruf[num]
    } else if (num === 3){
        return huruf[num]
    } else if (num === 4){
        return huruf[num]
    } else if (num === 5){
        return huruf[num]
    } else if (num === 6){
        return huruf[num]
    } else if (num === 7){
        return huruf[num]
    } else if (num === 8){
        return huruf[num]
    } else if (num === 9){
        return huruf[num]
    } else if (num === 10){
        return 'Sepuluh'
    } else if (num === 11){
        return 'Sebelas'
    } else if (num < 20){
        return in_words(num - 10) + ' belas' 
    } else if (num < 100){
        return in_words(Math.floor(num / 10)) + ' puluh ' + in_words(num % 10) 
    } else if (num < 200){
        return 'Seratus ' + in_words(num % 100) 
    } else if (num < 1000){
        return in_words(Math.floor(num / 100)) + ' ratus ' + in_words(num % 100)
    } else if (num < 2000){
        return 'Seribu ' + in_words(num % 1000)
    } else if (num < 1000000){
        return in_words(Math.floor(num / 1000)) + ' ribu ' + in_words(num % 1000)
    } else if (num < 1000000000){
        return in_words(Math.floor(num / 1000000)) + ' juta ' + in_words(num % 1000000)
    } else if (num < 1000000000000){
        return in_words(Math.floor(num / 1000000000)) + ' milyar ' + in_words(num % 1000000000)
    } else if (num < 1000000000000000){
        return in_words(Math.floor(num / 1000000000000)) + ' triliun ' + in_words(num % 1000000000000)
    } 

}

console.log(in_words(9999999999999))
//console.log(in_words(38079))
//console.log(in_words(82102713))