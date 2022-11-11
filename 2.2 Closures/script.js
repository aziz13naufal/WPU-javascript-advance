// function init() {
// 	// let nama = 'Aziz';
// 	return function(nama) {
// 		console.log(nama);
// 	}
// }
// let panggilNama = init();
// panggilNama('Aziz');
// panggilNama('Naufal');




// function ucapkanSalam(waktu) {
// 	return function(nama) {
// 		console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
// 	}
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatMalam('Aziz');





let add = (function() {
	let counter = 0;
	return function() {
		return ++counter;
	}
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());