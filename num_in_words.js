function in_words(number) {
  // Your code here
  function belowHundred(num) {
    let satuan = function satuan(num) {
      switch (num) {
        case 1:
          return 'satu';
          break;
        case 2:
          return 'dua';
          break;
        case 3:
          return 'tiga';
          break;
        case 4:
          return 'empat';
          break;
        case 5:
          return 'lima';
          break;
        case 6:
          return 'enam';
          break;
        case 7:
          return 'tujuh';
          break;
        case 8:
          return 'delapan';
          break;
        case 9:
          return 'sembilan';
          break;
        default:
          return '';
      }
    }

    let belasan = function belasan(num) {
      if (num === 10) return 'sepuluh'
      else if (num === 11) return 'sebelas'
      else if (num >= 11 && num <= 19) return `${satuan(num % 10)} belas`
      return ''
    }
    let puluhan = function puluhan(num) {
      return `${satuan(Math.floor(num / 10))} puluh ${satuan(num % 10)}`
    }

    if (num <= 9) return satuan(num)
    else if (num >= 10 && num <= 19) return belasan(num)
    else if (num >= 20 && num <= 99) return puluhan(num)
    return ''
  }

  if (number <= 99) return belowHundred(number)
  else if (number >= 100 && number <= 199) {
    return `seratus ${belowHundred(number % 100)}`
  } else if (number >= 200 && number <= 999) {
    return `${belowHundred(Math.floor(number / 100))} ratus ${belowHundred(number % 100)}`
  } else if (number >= 1000 && number <= 1999) {
    return `seribu ${in_words(number % 1000)}`
  } else if (number >= 2000 && number <= 999999) {
    return `${in_words(Math.floor(number / 1000))} ribu ${in_words(number % 1000)}`
  } else if (number >= 1000000 && number <= 999999999) {
    return `${in_words(Math.floor(number / 1000000))} juta ${in_words(number % 1000000)}`
  } else if (number >= 1000000000 && number <= 999999999999) {
    return `${in_words(Math.floor(number / 1000000000))} milyar ${in_words(number % 1000000000)}`
  } else if (number >= 1000000000000 && number <= 999999999999999) {
    return `${in_words(Math.floor(number / 1000000000000))} biliun ${in_words(number % 1000000000000)}`
  } else if (number >= 1000000000000000 && number <= 999999999999999999) {
    return `${in_words(Math.floor(number / 1000000000000000))} triliun ${in_words(number % 1000000000000000)}`
  }
  return ''
}

// Driver code
console.log(in_words(991888338));