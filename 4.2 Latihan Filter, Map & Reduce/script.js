// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yang 'Javascript Lanjutan'
let JsLanjut = videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN')) // innerHTML atau textContent


// ambil durasi masing2 video
.map(item => item.dataset.duration)


// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
	// 10:30 -> [10, 30] split
	const parts =  waktu.split(':').map(part => parseFloat(part))
	return (parts[0] * 60 + parts[1]);
})


// jumlahkan semua detik
.reduce((acc, cur) => acc + cur);


// ubah formatnya menjadi jam menit detik
const jam = Math.floor(JsLanjut / 3600);
jslanjut = JsLanjut - jam * 3600;
const menit = Math.floor(JsLanjut / 60);
const detik = JsLanjut - menit * 60;


// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const jVideo = document.querySelector('.jumlah-video');
jVideo.textContent = (videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN')).length + ' video');