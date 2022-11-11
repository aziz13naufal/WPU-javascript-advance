// HTML Fragments
// const mhs = {
// 	nama: 'Aziz',
// 	umur: 21,
// 	nrp: '10018827',
// 	email: 'aziz13naufal@gmail.com'
// };
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;



// 2. Looping


// const mhs = [
// 	{
// 		nama: 'aziz',
// 		email: 'aziz13naufal@gmail.com'
// 	},
// 	{
// 		nama: 'dicky',
// 		email: 'dicky13@gmail.com'
// 	},
// 	{
// 		nama: 'akmal',
// 		email: 'akmal13@gmail.com'
// 	}
// ];

// const el = `
// <div class='mhs'>
// ${mhs.map(m => `<ul>
// 	<li>${m.nama}</li>
// 	<li>${m.email}</li>
// 	</ul>`).join('')}
// </div>`











// 3. Conditionals
// ternary
// const lagu = {
// 	judul: 'Tetap Dalam Jiwa',
// 	penyanyi: 'Isyana Sarasvati',
// 	feat: 'Rayi Putra'
// }

// const el = `
// <div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat? `(feat. ${lagu.feat})` : ''}</li>
// </ul></div>`






// 4. Nested
// HTML Bersarang
const mhs = {
	nama: 'Aziz',
	semester: 5,
	mataKuliah: ['Rekayasa Web', 'Analisis dan Perancangan Sistem Informasi', 'Pemrograman Sistem Interaktif', 'Perancangan Sistem Berorientasi Object']
};

function cetakMataKuliah(mataKuliah) {
	return `
	<ol>
	${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
	</ol>`
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">semester :${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;