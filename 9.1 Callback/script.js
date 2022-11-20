// Callback
// Synchronous Callback

// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(a) {
//     const nama = prompt('Masukan Nama: ');
//     a(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));


// const mhs = [
//     {
//         "nama": "Aziz Naufal",
//         "nrp": "10018827",
//         "email" : "aziz@gmail.com",
//         "jurusan" : "Tekhnik Informatika",
//         "idDosenWali" : 1
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp": "10016956",
//         "email" : "doddy@gmail.com",
//         "jurusan" : "Tekhnik Informatika",
//         "idDosenWali" : 2
//     },
//     {
//         "nama": "Erik",
//         "nrp": "38749302",
//         "email" : "erik@gmail.com",
//         "jurusan" : "Tekhnik Industri",
//         "idDosenWali" : 2
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//      let date = new Date();   
//     }
//     console.log(m.nama)});
// console.log('selesai');


// Asynchronous Callback
function getDataMahasiswa(url, succes, error) {
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                succes(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}
console.log('Mulai');
getDataMahasiswa('data/mahasiswa.json', result => {
    const mhs = JSON.parse(result);
    mhs.forEach(m => console.log(m.nama));
}, () => {
});
console.log('selesai');

// JQuery
console.log('Mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');