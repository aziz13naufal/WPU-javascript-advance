const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// for
const newAngka = [];
for( i = 0; i < angka.length; i++ ) {
	if ( angka[i] >= 3 ) {
		newAngka.push(angka[i]);
	}
}
console.log(newAngka);


// Filter
const newAngka1 = angka.filter(a => a>=3);
console.log(newAngka1);


// Map
// kalikan semua angka dengan 2
const newAngka2 = angka.map(a => a * 2);
console.log(newAngka2);


// Reduce
// jumlahkan seluruh element pada Array
// (0 +) -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// setelah currentValue ada nilai defaultnya = 0
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka3);


// Method Chaining
// cari angka  > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, cur) => acc + cur,0);
console.log(hasil);