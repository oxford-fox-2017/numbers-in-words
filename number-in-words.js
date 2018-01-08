'use strict'

let numWords = {
  0   : '',
  1   : 'satu',
  2   : 'dua',
  3   : 'tiga',
  4   : 'empat',
  5   : 'lima',
  6   : 'enam',
  7   : 'tujuh',
  8   : 'delapan',
  9   : 'sembilan',
  10  : 'sepuluh',
  11  : 'sebelas',
}

function in_words(num) {
  if (num <= 11) {
    return numWords[num]
  } else if (num < 20) {
    return in_words(num % 10) + ' belas'
  } else if (num < 100) {
    return in_words(Math.floor(num / 10)) + ' puluh ' + in_words(num % 10)
  } else if (num < 200) {
    return 'seratus ' + in_words(num % 100)
  } else if (num < 1000) {
    return in_words(Math.floor(num / 100)) + ' ratus ' + in_words(num % 100)
  } else if (num < 2000) {
    return 'seribu ' + in_words(num % 1000)
  } else if (num < 1000000) {
    return in_words(Math.floor(num / 1000)) + ' ribu ' + in_words(num % 1000)
  } else if (num < 1000000000) {
    return in_words(Math.floor(num / 1000000)) + ' juta ' + in_words(num % 1000000)
  } else if (num < 1000000000000) {
    return in_words(Math.floor(num / 1000000000)) + ' miliar ' + in_words(num % 1000000000)
  } else if (num < 1000000000000000) {
    return in_words(Math.floor(num / 1000000000000)) + ' triliun ' + in_words(num % 1000000000000)
  } else if (num < 1000000000000000000) {
    return in_words(Math.floor(num / 1000000000000000)) + ' kuadriliun ' + in_words(num % 1000000000000000)
  }
}

console.log(in_words(4)) // "empat"
console.log(in_words(14)); // "empat belas"
console.log(in_words(27)) // "dua puluh tujuh"
console.log(in_words(102)); // "seratus dua"
console.log(in_words(125)); // "seratus dua puluh lima"
console.log(in_words(352)); // "tiga ratus lima puluh dua"
console.log(in_words(1000)); // "seribu"
console.log(in_words(1352)); // "seribu tiga ratus lima puluh dua"
console.log(in_words(4352)); // "empat ribu tiga ratus lima puluh dua"
console.log(in_words(10079)); // "tiga puluh delapan ribu tujuh puluh sembilan"
console.log(in_words(38079)); // "tiga puluh delapan ribu tujuh puluh sembilan"
console.log(in_words(82102713)); // "delapan puluh dua juta seratus dua ribu tujuh"
console.log(in_words(82122713000)); // "delapan puluh dua miliar seratus dua puluh dua juta tujuh ratus tiga belas ribu"
console.log(in_words(999000000000000)); // "sembilan ratus sembilan puluh sembilan triliun"
console.log(in_words(999003250000000000))
