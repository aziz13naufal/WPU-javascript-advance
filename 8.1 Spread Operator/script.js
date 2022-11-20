// Spread Operator
// memecah iterables menjadi single element


// console.log(...mhs[0]);

// menggabungkan 2 Array
// const mhs = ['Aziz', 'Naufal', 'Bagaskara'];
// const dosen = ['ziza', 'lafuan', 'asib'];
// const orang = [...mhs, 'Aji', ...dosen];
// console.log(orang);


// meng-copy array
// const mhs = ['Aziz', 'Naufal', 'Bagaskara'];
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(m => `<span>${m}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;