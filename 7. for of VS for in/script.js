// for..of
// Array
// const mhs = ['aziz', 'dicky', 'akmal'];

// for( let i = 0; i < mhs.length; i++ ) {
// 	console.log(mhs[i]);
// }

// mhs.forEach(a => console.log(a));

// for (const m of mhs) {
// 	console.log(m);
// }

// String
// const nama = 'Aziz Naufal';
// for (const n of nama) {
// 	console.log(n);
// }

// const mhs = ['aziz', 'naufal', 'bagaskara'];
// mhs.forEach((m, i) => {
// 	console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });
// for (const [i, m] of mhs.entries()) {
// 	console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// NodeList

// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(m => console.log(m.textContent));
// for (n of liNama) {
// 	console.log(n.innerHTML);
// }



// Arguments

// function jumlahAngka() {
// 	let jumlah = 0;
// 	for (n of arguments) {
// 		jumlah += n;
// 	}
// 	return jumlah;
// }
// console.log(jumlahAngka(1,2,3,4,5));




// for..in
const mhs = {
	nama: 'aziz',
	umur: 21,
}
for (m in mhs) {
	console.log(mhs[m]);
}

// kalau objek, gunakan for..in
// kalau array, gunakan for..of