// Template Literals / Template String
// const nama = 'Aziz';
// const umur = '21';
// console.log(`Halo nama saya ${nama}, saya ${umur} tahun.`);


// Embedded Expression
// console.log(`2 + 2 = ${2 + 2}`);
// console.log(`test alert ${alert(`Hai`);}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);


// HTML Fragment
const mhs = {
	nama: 'Aziz',
	umur: 21,
	nrp: '10018827',
	email: 'aziz13naufal@gmail.com'
};
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);