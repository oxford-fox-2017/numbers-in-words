function convertKata(uang){

    var satuanBilangan = ["1","2","3","4","5","6","7","8","9"]

    var kelipatan = [{
        index: 1,
        ejaan: ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"],
        angka: 1
    },
    {
        index: 2,
        ejaan: "puluh",
        angka: 10
    },
    {
        index: 3,
        ejaan: "ratus",
        angka: 100
    },
    {
        index: 4,
        ejaan: "ribu",
        angka: 1000
    }]

    var hasil = []

    for(var x = uang; x >=0; x--){
        var convertUang = String(uang)
        var indexSatuanBilangan = satuanBilangan.indexOf(convertUang[0])
        var ejaanDepan = kelipatan[0].ejaan[indexSatuanBilangan]
        hasil.push(ejaanDepan)
        

        for(var i = 0; i < kelipatan.length;i++){
            if(convertUang.length > 1 && convertUang.length === kelipatan[i].index){
                hasil.push(kelipatan[i].ejaan)
                uang = Number(convertUang) - (satuanBilangan[indexSatuanBilangan]*kelipatan[i].angka)
                console.log(uang)
                
                break;
            }
        }
        break;
    }

    console.log(hasil)
}

console.log(convertKata(44))
