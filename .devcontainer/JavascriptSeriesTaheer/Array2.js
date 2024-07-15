const Marvel_heros = ["Ironman","Thor","Hulk"]
const Dc_heros = ["Superman","Batman","Flash"]

// Marvel_heros.push(Dc_heros)
// console.log(Marvel_heros);
// console.log(Marvel_heros[3][1]);

// const Allhroes = Marvel_heros.concat(Dc_heros)
// console.log(Allhroes);

const all_new_heros = [...Marvel_heros,...Dc_heros] //... is used as spread operator
// console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6],7,8,[4,5,6[2,3]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Taheer"))
console.log(Array.from("Taheer"))
console.log(Array.from({name: "Taheer"})) // To change we shld specify type

let score1 = 123
let score2 = 223
let score3 = 323

console.log(Array.of(score1,score2,score3));
