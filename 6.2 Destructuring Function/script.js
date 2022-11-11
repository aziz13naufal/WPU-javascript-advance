// Destructuring

// function kalkulus(a, b) {
	// return [a + b, a * b, a - b, a / b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kali, kurang, bagi = 'tidak ada'] = kalkulus(2,3);
// console.log(bagi);


// function kalkulasi(a, b) {
// 	return {
// 		tambah: a + b,
// 		kurang: a - b,
// 		bagi: a / b,
// 		kali: a * b
// 	}
// }
// const {tambah, kali, kurang, bagi} = kalkulasi(2,3);
// console.log(kurang);



// Destructuring function arguments
const mhs1 = {
	nama: 'Aziz',
	umur: 21,
	email: 'aziz@gmail.com',
	nilai: {
		tugas: 80,
		uts: 85,
		uas: 75
	}
}
// function cetakMhs(mhs) {
// 	return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: {tugas, uts, uas} }) {
	return `Halo nama saya ${nama}, saya berumur ${umur} tahun. dan nilai saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));