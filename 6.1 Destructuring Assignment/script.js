// Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['halo', 'nama', 'saya', 'aziz'];

// skipping items
// const [a, , , d] = perkenalan;
// console.log(`${a} ${d}`);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
// 	return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);


// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);




// Destructuring Object

// const mhs = {
// 	nama: 'aziz',
// 	umur: 21
// }
// const {nama, umur} = mhs;
// console.log(nama);


// Assignment tanpa deklarasi object


// ({nama, umur} = { nama: 'aziz',umur: 21 });
// console.log(nama);



// Assignment ke variabel baru

// const mhs = {
// 	nama: 'aziz',
// 	umur: 21
// }
// const {nama: n, umur: u} = mhs;
// console.log(u);


// Memberikan default value

// const mhs = {
// 	nama: 'aziz',
// 	umur: 21
// }
// const {nama, umur, email} = mhs;
// console.log(email);


// Memberikan nilai default + assign ke variabel baru
// const mhs = {
// 	nama: 'aziz',
// 	umur: 21,
// 	email: 'aziz@gmail.com'
// }
// const {nama: n, umur: u, email: e = 'emil@gmail.comn'} = mhs;
// console.log(e);



// Rest Parameter

// const mhs = {
// 	nama: 'aziz',
// 	umur: 21,
// 	email: 'aziz@gmail.com'
// }
// const {nama, ...value} = mhs;
// console.log(value);



// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
	id: 123,
	nama: 'aziz',
	umur: 21,
	email: 'aziz@gmail.com'
}
function getIdmhs({id}) {
	return id;
}

console.log(getIdmhs(mhs));