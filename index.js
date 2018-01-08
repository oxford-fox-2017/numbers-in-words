function convertCoin(uang){

    var kamusCoin = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
    var kamusUang = [10000,5000,2000,1000,500,200,100,50,20,10,1]

    var coin = ""

    for(var i = uang; i >= 0;i--){
        for(var j = 0; j <= kamusUang.length - 1; j++){
            if(uang >= kamusUang[j]){
                coin+= kamusCoin[j];
                uang -= kamusUang[j];
                break;
                j = 0
            }
        }

        i = uang
    }

    console.log(coin)

}

console.log(convertCoin(1))
console.log(convertCoin(10))
console.log(convertCoin(170))
console.log(convertCoin(3500))