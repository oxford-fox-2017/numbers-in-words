'uses strict'

// recursive
function in_words(number) {
  let kata   = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan', 'sepuluh', 'sebelas'];

  if (number < 12) {
    return kata[number];
  } else if (number < 20) {
    return in_words(number % 10) + ' belas';
  } else if (number < 100) {
    return in_words((number - (number % 10)) / 10) + ' puluh ' + in_words(number % 10);
  } else if (number < 200) {
    return 'seratus ' + in_words(number % 100);
  } else if (number < 1000) {
    return in_words((number - (number % 100)) / 100) + ' ratus ' + in_words(number % 100);
  } else if (number < 2000) {
    return 'seribu ' + in_words(number % 1000);
  } else if (number < 1000000) {
    return in_words((number - (number % 1000)) / 1000) + ' ribu ' + in_words(number % 1000);
  } else if (number < 1000000000) {
    return in_words((number - (number % 1000000)) / 1000000) + ' juta ' + in_words(number % 1000000);
  } else if (number < 1000000000000) {
    return in_words((number - (number % 1000000000)) / 1000000000) + ' miliar ' + in_words(number % 1000000000);
  } else if (number < 1000000000000000) {
    return in_words((number - (number % 1000000000000)) / 1000000000000) + ' triliun ' + in_words(number % 1000000000000);
  } else if (number < 1000000000000000000) {
    return in_words((number - (number % 1000000000000000)) / 1000000000000000) + ' bilion ' + in_words(number % 1000000000000000);
  }
}

// Driver code
console.log(in_words(4));  // empat
console.log(in_words(27)); // dua puluh tujuh
console.log(in_words(102)); // seratus dua
console.log(in_words(38079)); // tiga puluh delapan ribu tujuh puluh sembilan
console.log(in_words(82102713)); // delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas
// console.log(in_words(999000000000000)); // sembilan ratus sembilan puluh sembilan triliun
