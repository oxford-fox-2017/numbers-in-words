function in_words(num) {
  var depan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  
  var numStr = num.toString();
  if(num < 20) {
    return depan[num];
  } else if (num < 100) {
    return in_words(Math.floor(num/10)) + ' puluh ' + in_words(num%10);
  } else if (num < 1000) {
    if(numStr[0] === '1') {
      return 'seratus ' + in_words(num%100);
    } else {
      return in_words(Math.floor(num/100)) + ' ratus ' + in_words(num%100);
    }
  } else if (num < 1000000) {
    return in_words(Math.floor(num/1000)) + ' ribu ' + in_words(num%1000);
  }
}

in_words(9999);
















