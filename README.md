# numbers-in-words

function in_words(num){
  
  var result = [];
  var satuan = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  var puluhan = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
  var ratusan = ['', 'seratus', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus', 'delapan ratus', 'sembilan ratus'];
  var hub = ['', 'puluh', 'ratus', 'ribu', 'juta'];
  
  if(num<20){
    return satuan[num];
  }
  
  if(num<100){
    return puluhan[Math.floor(num/10)] + ' ' + satuan[num%10];
  }
  
  if(num===100){
    return ratusan[num/100];
  }
  
  if (num<1000){
    return ratusan[Math.floor(num/100)] + ' ' + in_words(num%100);
  }
  
}

console.log(in_words(100));