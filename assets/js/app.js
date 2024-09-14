
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