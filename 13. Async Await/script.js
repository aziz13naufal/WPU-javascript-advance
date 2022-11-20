function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai');
            }, waktu);
        } else {
            reject('Kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(err => console.log(err));

async function cobaAsync() {
    try { // try untuk .then
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) { // catch() untuk .catch
        console.error(err);
    }
}
cobaAsync();