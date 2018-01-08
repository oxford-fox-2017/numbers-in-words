function inWords(input){
    let words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
    let kata = ''
    if(input < 12){
        kata+=words[input]
        return kata
    }else if(input < 20){
        return inWords(input%10) +' belas'
    }else if(input < 100){
        return inWords(Math.floor(input/10))+ ' puluh ' + inWords(Math.floor(input%10))
    }else if(input < 200){
        return  'seratus ' + inWords(Math.floor(input % 100))
    }else if (input < 1000){
        return inWords(Math.floor(input/100)) +' ratus '+ inWords(input%100)
    }else if (input < 2000){
        return 'seribu ' + inWords(input%1000)
    }

}

console.log(inWords(999))