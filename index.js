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
              return 'seratus'
            }else if (num <1000){
              return units[Math.floor(num/100)]+' ratus ' + in_words(num%100)
            }
    }
    console.log(in_words(4))
    console.log(in_words(27))
    console.log(in_words(200))