// Tagged Template
// const nama = 'aziz';
// const umur = 21;

// function coba(strings, ...values) {
// 	// let result = '';
// 	// strings.forEach((a,b) => {
// 	// 	result += `${a}${values[b] || ""}`;
// 	// });
// 	// return result;

// 	return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'');

// 	}
// const str = coba`halo saya ${nama}, saya ${umur} tahun.`;

// console.log(str);





// Highlight 
const nama = 'aziz';
const umur = 21;
const email = 'aziz@gmail.com'

function highlight(strings, ...values) {
	return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}
const str = highlight`halo saya ${nama}, saya ${umur} tahun. dan email saya : ${email}.`;

console.log(str);

document.body.innerHTML = str;