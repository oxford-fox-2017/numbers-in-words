// 1. Bikin function
// 2. Dalam function bikin array kata nomor
// 3. Bikin variable untuk tampung nomor yang di split
// 4. Bikin validasi nomor untuk 0 sampai dengan 999

function in_words(num){
var single=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
var noSplit=(String(num).split(''));

// console.log(noSplit[0]);

switch(true){
  case(num === 0): return 'kosong';
  case(num === 11): return 'sebelas';
  case (num === 111): return 'seratus sebelas';
  case (num === 211): return 'dua ratus sebelas';
  case (num === 311): return 'tiga ratus sebelas';
  case (num === 411): return 'empat ratus sebelas';
  case (num === 511): return 'lima ratus sebelas';
  case (num === 611): return 'enam ratus sebelas';
  case (num === 711): return 'tujuh ratus sebelas';
  case (num === 811): return 'delapan ratus sebelas';
  case (num === 911): return 'sembilan ratus sebelas';
  case (noSplit.length == 1): return (single[num]);
  case (noSplit.length ==2 && Number(noSplit[0]) ==1): return (single[noSplit[1]] +' belas');
  case (noSplit.length ==2): return (single[noSplit[0]] +' puluh '+ single[noSplit[1]]);
  case (noSplit.length ==3 && noSplit[0]==1 && Number(noSplit[1])==1): return ('seratus '+single[noSplit[2]]+' belas ');
  case (noSplit.length ==3 && noSplit[0]==1 && Number(noSplit[1])===0): return ('seratus '+ single[noSplit[2]]);
  case (noSplit.length ==3 && Number(noSplit[1]) ==1): return (single[noSplit[0]]+' ratus '+single[noSplit[2]]+' belas ');
  case (noSplit.length ==3 &&noSplit[0]!=1 && num !== 211 && num!==311 && num!==411 && num!==511 && num!==611 && num!==711 && num!==811 && num!==911): return (single[noSplit[0]] +' ratus '+ single[noSplit[1]] +' puluh '+single[noSplit[2]]);
  case (noSplit.length ==3 && noSplit[0]==1 && Number(noSplit[1])===0): return ('seratus '+ single[noSplit[2]]);
  case (num === 111): return 'seratus sebelas';
  case (noSplit.length ==3 && noSplit[0]==1 && Number(noSplit[1])==1): return ('seratus ' + single[noSplit[2]] +' belas' );
  case (noSplit.length ==3 && noSplit[0]==1 && Number(noSplit[1])!==1): return ('seratus ' + single[noSplit[1]]+' puluh '+ single[noSplit[2]]);
}


}

console.log(in_words(9));        //empat
console.log(in_words(27));       //dua puluh tujuh
console.log(in_words(293));      //seratus dua
// console.log(in_words(38079));    //tiga puluh delapan ribu tujuh puluh sembilan
// console.log(in_words(82102713)); //delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas
