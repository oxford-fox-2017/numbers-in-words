function in_words(num){

  let angka = {
    0 : '',
    1 : 'satu',
    2 : 'dua',
    3 : 'tiga',
    4 : 'empat',
    5 : 'lima',
    6 : 'enam',
    7 : 'tujuh',
    8 : 'delapan',
    9 : 'sembilan',
    10 : 'sepuluh',
    11 : 'sebelas'
  }
  if(num < 12){
    return angka[num]
  } else if (num < 20){
    return `${angka[num-10]} belas`
  } else if(num < 100){
    return `${angka[Math.floor(num/10)]} puluh ${in_words(num-Math.floor(num/10)*10)}`
  } else if(num < 200){
    return `seratus ${in_words(num-Math.floor(num/100)*100)}`
  } else if(num< 1000){
    return `${angka[Math.floor(num/100)]} ratus ${in_words(num-Math.floor(num/100)*100)}`
  } else if(num < 2000){
    return `seribu ${in_words(num-Math.floor(num/100)*100)}`
  } else if(num < 1000000){
    return `${in_words([Math.floor(num/1000)])} ribu ${in_words(num-Math.floor(num/1000)*1000)}`
  } else if(num < 1000000000){
    return `${in_words(Math.floor(num/1000000))} juta ${in_words(num-Math.floor(num/1000000)*1000000)}`
  } else if(num < 1000000000000){
    return `${in_words(Math.floor(num/1000000000))} miliar ${in_words(num-Math.floor(num/1000000000)*1000000000)}`
  } else if(num < 1000000000000000){
    return `${in_words(Math.floor(num/1000000000000))} triliun ${in_words(num-Math.floor(num/1000000000000)*1000000000000)}`
  }
}

console.log(in_words(1232));
