/*
1. bikin index untuk word nya 
2. dibuat persyaratan untuk merubah angka menjadi huruf
*/
function numbersInWords(angka){
let huruf = ['','satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 
   'sebelas ','seratus '];
let huruf2 = ['belas ','puluh ','ratus ','ribu ']   
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
    }

}
console.log (numbersInWords('835'))


