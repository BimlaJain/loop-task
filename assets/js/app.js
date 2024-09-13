
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// // While loop
// let j = 0;
// while (j < 5) {
//     console.log(" While loop: " + j);
//     j++;
// }

// // Do-while loop
// let k = 0;
// do {
//     console.log(" Do-while loop: " + k);
//     k++;
// } while (k < 8);
let table = 8;
let result = "";
for (let i = 1; i <= 10; i++) {
    result += table + " * " + i + " = " + table * i + "<br>";
}
document.getElementById("forloop").innerHTML = result;

// while loop

let add = 2;
let answer = "";
let i = 1;
while (i <= 10) {
    answer += add + " + " + i + " = " + (add + i) + "<br>";
    i++;
}
document.getElementById("whileloop").innerHTML = answer;

// Do while loop
let subtract = 5;
let a = "";
let s = 0;
do {
    a += subtract + " - " + s + " = " + (subtract - s) + "<br>";
    s++;
} while (s < 10);
document.getElementById('doloop').innerHTML = a;