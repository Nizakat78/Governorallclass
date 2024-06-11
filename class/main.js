"use strict";
// let table = 10
Object.defineProperty(exports, "__esModule", { value: true });
// for (let i = 1; i<=10; i++){
//     console.log(`${i}*${2}= ${i * 2}`);
// }
let name = "";
for (let b = 1; b <= 10; b++) {
    for (let j = b; j <= 20; j++) {
        name += "*";
    }
    name += "n/";
}
console.log(name);
