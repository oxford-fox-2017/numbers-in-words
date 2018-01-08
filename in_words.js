function in_words(num) {

    let lowBank = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
    let highBank = ['seratus', 'seribu']
    let nominal = ['belas', 'puluh', 'ratus', 'ribu', 'juta', 'miliar', 'triliun', 'biliun']

    if (num <= 0) {
        return ' '
    } else if (num < 12) {
        return lowBank[num]
    } else if (num < 20) {
        return lowBank[num - 10] + ' ' + nominal[0];
    } else if (num < 100) {
        return in_words((num - (num % 10)) / 10) + ' ' + nominal[1] + ' ' + in_words(num % 10)
    } else if (num < 200) {
        return highBank[0] + ' ' + in_words(num % 100)
    } else if (num < 500) {
        return in_words((num - (num % 100)) / 100) + ' ' + nominal[2] + ' ' + in_words(num % 100)
    } else if (num < 1000) {
        return in_words((num - (num % 100)) / 100) + ' ' + nominal[2] + ' ' + in_words(num % 100)
    } else if (num < 2000) {
        return highBank[1] + ' ' + in_words(num % 1000)
    } else if (num < 10000) {
        return in_words((num - (num % 1000)) / 1000) + ' ' + nominal[3] + ' ' + in_words(num % 1000)
    } else if (num < 100000) {
        return in_words((num - (num % 1000)) / 1000) + ' ' + nominal[3] + ' ' + in_words(num % 1000)
    } else if (num < 1000000) {
        return in_words((num - (num % 1000)) / 1000) + ' ' + nominal[3] + ' ' + in_words(num % 1000)
    } else if (num < 1000000000) {
        return in_words((num - (num % 1000000)) / 1000000) + ' ' + nominal[4] + ' ' + in_words(num % 1000000)
    }
}

console.log(in_words(1981220))