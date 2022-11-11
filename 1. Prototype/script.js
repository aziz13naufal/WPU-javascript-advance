// Cara membuat Object pada Javascript
// 1. Object Literal
// PROBLEM : Tidak efektif untuk object yang banyak

// let mahasiswa1 = {
// 	nama: 'Aziz',
// 	energi: 10,
// 	makan: function(porsi) {
// 		this.energi = this.energi + porsi * 10;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'Dicky',
// 	energi: 20,
// 	makan: function(porsi) {
// 		this.energi = this.energi + porsi * 10;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }





// 2. Function Declaration

// const methodMahasiswa = {
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	},
// 	main: function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	},
// 	tidur: function(jam) {
// 		this.energi += ham * 2;
// 	}
// }
// function Mahasiwa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
	
// 	return mahasiswa;
// }

// let aziz = Mahasiwa('Aziz', 10);
// let dicky = Mahasiwa('Dicky', 20);




// Menggunakan Prototype

// function Mahasiwa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiwa.prototype.makan = function(porsi) {
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiwa.prototype.main = function(jam) {
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiwa.prototype.tidur = function(jam) {
// 	this.energi += jam * 2;
// 	return `Halo ${this.nama}, selamat tidur!`;
// }

// let aziz = new Mahasiwa('aziz', 10);


// versi Class

// class Mahasiswa {
// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// 	}
// 	makan(porsi) {
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// 	}

// 	main(jam) {
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat bermain!`;
// 	}

// 	tidur(jam) {
// 	this.energi += jam * 2;
// 	return `Halo ${this.nama}, selamat tidur!`;
// 	}	
// }

// let aziz = new Mahasiswa('Aziz', 10);
// let dicky = new Mahasiswa('Dicky', 20);





// 3. Constructor Function

// function Mahasiwa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi) {
// 		this.energi += porsi * 10;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// 	this.main = function(jam) {
// 		this.energi -= jam * 10;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	}
// }

// let aziz = new Mahasiwa('Aziz', 10);

// 4. Object.create