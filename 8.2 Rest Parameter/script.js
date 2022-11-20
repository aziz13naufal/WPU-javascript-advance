// Rest Parameter
// function myFunc() {
    // return Array.from(arguments);
    // return [...arguments];
// }
// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka) {
    // let total = 0;
    // for(n of [...angka]) {
    //     total += n;
    // }
    // return total;


    // return angka.reduce((a,b) => a + b);
// }
// console.log(jumlahkan(1,2,3,4,5));

// Array Destructing
// const kelompok1 = ['Aziz', 'Akmal', 'Dicky', 'Zoro'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// Object Destructuring

// const team = {
//     pm: 'Aziz',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam);





// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));