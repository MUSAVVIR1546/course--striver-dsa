//1
// function findLargest(arr) {
// let largest = 0;
// for (const key of arr) {
// if (key > largest) {
// largest = key;
// }
// }
// return largest
// }]

//2
// function findLargest(arr) {
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (num > largest) {
//             largest = num
//         }
//     }
//     return largest;
// }

//3
// function findLargest(arr) {
// let largest = arr.reduce((large, num) => {
// if (num > large) {
// large = num;
// }
// return large;
// }, 0)
// return largest;
// }

//4
function findLargest(arr) {
    if (arr.length === 0) return undefined;
    let largest = Math.max(...arr);
    return largest;
}
console.log(findLargest([2, 5, 1, 3, 0]));
console.log(findLargest([8, 10, 5, 7, 9]));