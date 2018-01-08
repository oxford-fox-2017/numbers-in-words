const in_words = (num) => {
  let words = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  if (num < 10) {
    return words[num - 1];
  } else if (num < 11) {
    return 'sepuluh';
  } else if (num < 12) {
    return 'sebelas';
  } else if (num < 20) {
    return in_words(num % 10) + ' belas';
  } else if (num < 100) {
    if (num % 10 !== 0) {
      return in_words((num - (num % 10)) / 10) + ' puluh ' + in_words(num % 10);
    } else {
      return in_words((num - (num % 10)) / 10) + ' puluh';
    }
  } else if (num < 200) {
    return 'seratus ' + in_words(num % 100);
  } else if (num < 1000) {
    return in_words((num - (num % 100)) / 100) + ' ratus ' + in_words(num % 100);
  }
}

console.log(in_words(1));
console.log(in_words(19));
console.log(in_words(90));
console.log(in_words(199));
console.log(in_words(120));
console.log(in_words(999));
