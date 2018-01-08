/*
1. bikin index untuk word nya 
2. dibuat persyaratan untuk merubah angka menjadi huruf
3. di buat < 12 ,  index tinggal di cari sesuai angka , di huruf[]
4. angka < 20 , angka di modulus , agar mendapat angka tunggal , index di huruf , belakangnya huruf2 index ke 0 
5.  20 < angka < 100 , dipakai sintax floor agar nilai nya bulat kebawah, didapat angka tunggal , mencari index di huruf kemudian 
puluhnya di cari di huruf2 index ke 1 , dan modulus 10 agar didapat angka tunggal dapat dicari di index huruf
6. 100 < angka < 200 , cari pada huruf index 12, karena batasnya 200 , jadi bisa langsung seratus , kemudian lakukan recursive 
agar bisa balik ke 20 < angka < 100
7. 200 < angka < 1000, dibagian 100 dan kita pakai math floor , kemudian di tambahkan index pada huruf2 , lakukan recursive 
agar balik ke 100 < angka < 200
8. 1000 < angka < 2000 , index ke 13 pada huruf, karena awalnya seribu , kemudian ditambahkan dengan recursive agar kembali 
ke 200 < angka < 1000
9. 2000 < angka < 1.000.000 , lakukan recursive agar kembali ke ratusan 200 < angka < 1000 , ditambah index 3 huruf2 , dan lakukan recursive
agar kembali ke ratusan 
10. 1.000.000 < angka < 1.000.000.000 , lakukan recursive ke ratusan 200 < angka 1000 , ditambah index 4 huruf2 , dan lakukan recursive 
agar kembali ke 2000 < angka < 1.000.000
11. 1.000.000.000 < angka < 1.000.000.000.000, lakukan recursive ke ratusan 200 < angka 1000 , ditambah index 5 huruf2 , dan lakukan recursive 
agar kembali ke 2000 < angka < 1.000.000
*/
function numbersInWords(angka){
let huruf = ['','satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 
   'sebelas ','seratus ','seribu '];
let huruf2 = ['belas ','puluh ','ratus ','ribu ','juta ','milyar ','triliun ']   
    if (angka < 12 ){
        return huruf[angka]
    }else if (angka < 20  ){
        return huruf[angka%10] + huruf2[0]  
    }else if (20 < angka && angka < 100 ){
        return huruf[Math.floor(angka/10)] + huruf2[1] + huruf[angka%10]  
    }else if (100 < angka && angka < 200){
        return huruf[12] + numbersInWords(angka-100)
    }else if (200 < angka && angka < 1000){
        return huruf[Math.floor(angka/100)]+ huruf2[2] + numbersInWords(Math.floor(angka%100))
    }else if(1000 < angka && angka < 2000){
       return huruf[13] + numbersInWords(angka-1000)
     }else if(2000 < angka && angka < 1000000){
         return numbersInWords(Math.floor(angka/1000))+ huruf2[3] + numbersInWords(Math.floor(angka%1000))
     }else if(1000000 <= angka  && angka < 1000000000){
         return numbersInWords(Math.floor(angka/1000000))+huruf2[4]+ numbersInWords(angka%1000000)
     }else if(1000000000 <= angka && angka < 1000000000000){
         return numbersInWords(Math.floor(angka/1000000000))+huruf2[5]+ numbersInWords(angka%1000000000)  
     }
}
console.log (numbersInWords('654300000000'))
