function in_words(num) {

    let lowBank = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
    let highBank = ['seratus', 'seribu']
    let nominal = ['puluh', 'belas', 'ratus', 'ribu', 'juta', 'miliar', 'triliun', 'biliun']

    if (num <= 0) {
        return 'MASUKKAN ANGKA POSITIF'
    } else if (num < 12) {
        return bank[num]
    } else if (12 <= num < 20) {
        return bank[num - 10] + nominal[1]
    } else if (20 <= num < 100) {

    }
}

console.log(in_words(19))