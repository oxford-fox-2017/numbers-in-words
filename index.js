function numberWord(jumlah){
    let nominal=['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas','Seratus ','Seribu '];
    let satuan=[' Belas ',' Puluh ',' Ratus ',' Ribu ',' Juta ',' Milyar ',' Triliun ']
    if(jumlah<12){
        return nominal[jumlah]
    }else if(jumlah<20){
        return nominal[jumlah%10]+satuan[0]
    }else if(jumlah>20&&jumlah<100){
        return nominal[Math.floor(jumlah/10)]+satuan[1]+nominal[jumlah%10]
    }else if(jumlah>100&&jumlah<200){
        return nominal[12]+numberWord(jumlah-100)
    }else if(jumlah>200&&jumlah<1000){
        return nominal[Math.floor(jumlah/100)]+satuan[2]+numberWord(Math.floor(jumlah%100))
    }else if(jumlah>1000&&jumlah<2000){
        return nominal[13]+numberWord(jumlah-1000)
    }else if(jumlah>2000&&jumlah<1000000){
        return numberWord(Math.floor(jumlah/1000))+satuan[3]+numberWord(Math.floor(jumlah%1000))
    }else if(jumlah>=1000000&&jumlah<1000000000){
        return numberWord(Math.floor(jumlah/1000000))+satuan[4]+ numberWord(jumlah%1000000)
    }else if(jumlah>=1000000000&&jumlah<1000000000000){
    return numberWord(Math.floor(jumlah/1000000000))+satuan[5]+ numberWord(jumlah%1000000000)
    }else if(jumlah>=1000000000000&&nujumlahmber<1000000000000000){
    return numberWord(Math.floor(jumlah/1000000000000))+satuan[6]+ numberWord(jumlah%1000000000000)
    }
}
console.log(numberWord(99900000))