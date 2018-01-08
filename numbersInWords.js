var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas',
  'dua belas', 'tiga belas', 'empat belas', 'limabelas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
var puluhan = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
// var penghitung = ['', 'ribu', 'juta', 'miliar', 'triliun'];

function toWords(angka) {
  var line;
  if (angka > 999) {
    return 'angka terlalu besar , susah ngitungnya :('
  }
  if (angka === 0) {
    line = '';
  }
  else if (angka < 20) {
    line = satuan[angka];
  }
  else if (angka < 100) {
    line = puluhan[(angka / 10) | 0];
    if (angka % 10) {
      line += ' ' + satuan[angka % 10];
    }
  }
  else {
    line = satuan[(angka / 100) | 0] + " ratus " + toWords(angka % 100);
  }
  if (line.slice(0, 5) === "satu ") {
    line = line.replace("satu ", "se");
  }
return line;
}

console.log(toWords(101));
