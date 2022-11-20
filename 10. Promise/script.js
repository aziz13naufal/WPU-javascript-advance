// $.ajax({
//     url: 'http://www.omdbapi.com?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies),
// });

// fetch('http://www.omdbapi.com?apikey=dca61bcc&s=avengers').then( r => r.json()).then(r => console.log(r));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji ( terpenuhi / ingkar )
// states ( fullfield / rejected / pending )
// callback ( resolve / reject / finally )
// aksi ( then / catch )

// Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati!');
//     } else {
//         reject('Ingkar janji..');
//     }
// });
// janji1
//     .then(response => console.log(`OK! : ${response}`));
//     .catch(response => console.log(`NOT OK! : ${response}`));


// Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });
// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK! :' + response ))
//     .catch(response => console.log('NOT OK! :' + response));
// console.log('selesai');


// Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Aziz Naufal',
            pemeran: 'Doddy, Erik',
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })