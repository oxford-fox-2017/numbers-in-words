
function numberInWords(num){
	var numString = num.toString();
	var angka = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];
	var penghubung = ['puluh','ratus','ribu'];
	var puluh = Math.floor(num/10)
	var ratus = Math.floor(num/100)
		if(num<20){
			return angka[num];
		} else if(num == 100){
			return 'seratus';
		} else if(num < 100){
			return angka[puluh]+' '+penghubung[numString.length-2]+' '+angka[num-10*puluh]
		} else if(num < 1000){
			return angka[ratus]+' '+penghubung[numString.length-2]+' '+angka[puluh-ratus*10] + ' ' + penghubung[numString.length-3] +' '+ angka[num%10]
		}
			
}

console.log(numberInWords(899));