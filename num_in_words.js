let satuan = function satuan(num) {
  switch (num) {
    case '0':
      return 'nol';
    case '1':
      return 'satu';
    case '2':
      return 'dua';
    case '3':
      return 'tiga';
    case '4':
      return 'empat';
    case '5':
      return 'lima';
    case '6':
      return 'enam';
    case '7':
      return 'tujuh';
    case '8':
      return 'delapan';
    case '9':
      return 'sembilan';
  }
}

let puluhan = function puluhan(num) {
  let head = num[0];
  let last = num[1];

  if (num === '10') return 'sepuluh' //10
  else if (num === '11') return 'sebelas' //11
  else if (head === '1') return `${satuan(last)} belas` //12-19  
  else if (head === '0') return satuan(last)
  else if (last === '0') return `${satuan(head)} puluh` //20-90
  return `${satuan(head)} puluh ${satuan(last)}` // 21-99
}

let ratusan = function ratusan(num) {
  let head = num[0]
  let middle = num[1]
  let last = num[2]
  let tail = middle + last

  if (num === '100') return 'seratus'
  else if (tail === '00') return `${satuan(head)} ratus`
  else if (head === '0' || head === '1') return `seratus ${puluhan(tail)}`
  return `${satuan(head)} ratus ${puluhan(tail)}`
}


function in_words(num) {
  let splitNum = num.toString().split('')
  if (splitNum.length == 1) {
    console.log(satuan(String(num)))
  } else if (splitNum.length == 2) {
    console.log(puluhan(String(num)))
  } else if (splitNum.length == 3) {
    console.log(ratusan(String(num)))
  }
}


in_words(4)
in_words(27)
in_words(102)
in_words(999)