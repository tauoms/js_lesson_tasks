// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.


// INITIAL THOUGHT, HORRIBLE, NOT GOOD:
// let result = "";

// function printPosEven () {
//     for (let i = 1; i < 50; i++) {
//         if (i % 2 == 0 && i > 2) {
//             result += `, ${i}`;
//             for (let i = 99; i > 50; i--) {
//                 if (i % 2 == 0) {
//                     result += `, ${i}`;
//                     break;
//             }
//         }
//         if (i % 2 == 0 && i <= 2) {
//             result += i;
//         }
//     }
//     }
//     console.log(result);
// }

// printPosEven();

let max = 98;

let answer = '';

for (let min = 2; min <= 50; min += 2) {
    answer += `${min}, ${max}, `;
    max -= 2;
}

console.log(answer);



