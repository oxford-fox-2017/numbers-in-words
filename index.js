/*
1. buat fungsi 'in_word' yang menerima parameter 'num'
2. buat variabel 'units' yang bernilai array 
3. lakukan pengecekan
  - jika 'num' lebih kecil dari 12, kembalikan nilai 'units' index ke 'num'
  - jika 'num' lebih kecil dari 20, kembalikan nilai 'units' index ke hasil bagi 'num'dengan 10
  - jika 'num' lebih kecil dari 100, kembalikan nilai 'units' index ke hasil bagi 'num'dengan 10  ditambah string 'puluh' lalu ditambah fungsi in_words(num%10)
  - jika 'num' sama dengan 100, kembalikan string 'seratus'
  - jika 'num' lebih kecil dari 200, kembalikan string 'seratus' ditambah fungsi in_words(num%100)
  - jik 'num' lebih kecil dari 1000, kembalikan nilai index ke num dibagi 100 ditambah string 'ratus' ditambah fungsi in_words(num%100)
  - jika 'num' sama dengan 1000, kembalikan string 'seribu'
  - jika 'num' lebih kecil dari 2000, kembalikan string 'seribu' ditambah nilai fungsi in_words(num%1000)
  - jika 'num' lebih kecil dari 1000000, kembalikan nilai fungsi in_words(Math.floor(num/1000)) ditambah string 'ribu' ditambah nilai fungsi in_words(num%1000)
  - jika 'num' lebih kecil dari 1000000000, kembalikan nilai fungsi in_words(Math.floor(num/1000000)) ditambah string 'juta' ditambah nilai fungsi in_words(num%1000000)
  - jika 'num' lebih kecil dari 1000000000000, kembalikan nilai fungsi in_words(Math.floor(num/1000000000)) ditambah string 'milyar' ditambah nilai fungsi in_words(num%1000000000)
  -  jika 'num' lebih kecil dari 1000000000000000, kembalikan nilai fungsi in_words(Math.floor(num/1000000000000)) ditambah string 'triliyun' ditambah nilai fungsi in_words(num%1000000000000)
*/

function in_words(num) {
    
        var units = ["","satu","dua","tiga","empat",
            "lima","enam","tujuh","delapan","sembilan","sepuluh",
            "sebelas"];
      
            if( num < 12) {
              return units[num];
            }else if( num < 20) { 
              return units[Math.floor(num%10)]+' belas';
            }else if (num < 100) {
              return units[Math.floor(num/10)]+' puluh ' + in_words(num%10);
            }else if (num ===100){
              return 'seratus';
            }else if (num <200){
              return 'seratus ' + in_words(num%100);
            }else if (num <1000){
              return units[Math.floor(num/100)]+' ratus ' + in_words(num%100);
            }else if (num === 1000){
              return 'seribu';
            }else if (num <2000){
              return 'seribu ' + in_words(num%1000);
            }else if (num <1000000){
              return in_words(Math.floor(num/1000))+' ribu ' + in_words(num%1000);
            }else if (num <1000000000){
              return in_words(Math.floor(num/1000000))+' juta ' + in_words(num%1000000);
            }else if (num <1000000000000){
              return in_words(Math.floor(num/1000000000))+' milyar ' + in_words(num%1000000000);
            }else if (num <1000000000000000){
              return in_words(Math.floor(num/1000000000000))+' triliyun ' + in_words(num%1000000000000);
            }
    }
    console.log(in_words(4))
    console.log(in_words(19))
    console.log(in_words(199))
    console.log(in_words(9909))
    console.log(in_words(123456))
    console.log(in_words(999000000000000))