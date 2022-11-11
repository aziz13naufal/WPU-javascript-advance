// Function Expression
// const tampilNama = function (nama) {
// 	return `Halo ${nama}`;
// }
// console.log(tampilNama('Aziz'));

// const tampilNama1 = (nama, waktu) => {
// 	return `Halo ${nama}, selamat ${waktu}`;
// }
// console.log(tampilNama1('Aziz', 'Siang'));


// implisit return
// const tampilNama2 = nama => `halo ${nama}`;
// console.log(tampilNama2('Azizz'));

// const tampilNama3 = () => `Hello World!`;
// console.log(tampilNama3());


// let mahasiswa = ['Aziz', 'Dicky', 'Akmal'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);


// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);


// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);
// jika mau mengembalikan object yang propertinya sama dengan nilainya
// gaperlu tulis dua duanya, cukup satu saja misal "nama: nama" menjadi "nama" saja



// Konsep this pada Arrow Function


// Construction function
// const Mahasiswa = function () {
// 	this.nama = 'Aziz';
// 	this.umur = 21;
// 	this.sayHello = function () {
// 		console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
// 	}
// }

// const aziz = new Mahasiswa();



// Arrow Function
// const Mahasiswa = function () {
// 	this.nama = 'Aziz';
// 	this.umur = 21;
// 	this.sayHello = () => {
// 		console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
// 	}
// }

// const aziz = new Mahasiswa();


// Object Literal - Gagal karena Arrow Function tidak dapat mencari this.
// const mhs1 = {
// 	nama: 'Aziz',
// 	umur: 21,
// 	sayHello: () => {
// 		console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun`);
// 	}
// }




// Penggunaan Arrow function pada declaration function
// const Mahasiswa = function () {
// 	this.nama = 'Aziz';
// 	this.umur = 21;
// 	this.sayHello = function () {
// 		console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
// 	}

// 	setInterval(() => {
// 		console.log(this.umur++);
// 	}, 500);
// }

// const aziz = new Mahasiswa();








const box = document.querySelector('.box');
box.addEventListener('click', function() {
	let satu = 'size';
	let dua = 'caption';

	if(this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}

	this.classList.toggle('size');
	setTimeout(() => {
	this.classList.toggle('caption');
	}, 600);
}); 