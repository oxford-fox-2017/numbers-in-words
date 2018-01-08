var kamus = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
var angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var bilangan = ['puluh', 'ratus'];
var bilang   = [10,100];

function in_words(num) {
	var result = [];
	
	// 100 - 999
	if(num > 99 && num < 1000){
		for(var j = 9; j > 0; j--){
			if( (num / (j * 100)) >= 1 ){
				temp2 = j;
				num = num - (j * 100);
				index3 = angka.indexOf(temp2);
				bilangan3 = kamus[index3];

				if(temp2 == 1) {
					result.push("seratus");
				}	else {
					result.push(bilangan3);
					result.push("ratus");
				}

			}
		}
	}	
	
	// 20 - 99
	if(num > 19 && num < 100) {
		for(var i = 9; i > 1; i--) {
			if( (num / (i * 10)) > 1 ){
				temp = i;
				num = num - (i * 10);
				index2 = angka.indexOf(temp);
				bilangan2 = kamus[index2];
				
				result.push(bilangan2);
				result.push("puluh");
				break;
			}
		}
	}
	
	//1 - 19
	var arr = angka.filter( array => array == num);
	var toNum = Number(arr);
	var index = angka.indexOf(toNum);
	var satuan = kamus[index];
	
	result.push(satuan);
	console.log(result);
}


in_words(4);
in_words(19);
in_words(27);
in_words(99);
in_words(102);
in_words(817);
// in_words(38079);
// in_words(82102713);