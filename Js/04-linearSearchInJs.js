// Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

//1
// function search(arr, num) {
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] === num) {
// index = i;
// }
// }
// return index;
// }

//2
function search(nums, num) {
    return nums.reduce((ind, int, index) => {
        if (int === num) {
            ind = index
        }
        return ind;
    }, 0)
}
console.log(search([1, 2, 3, 4, 5], 3));
console.log(search([5, 4, 3, 2, 1], 5));

// Example 1:
// Input: arr[]= 1 2 3 4 5, num = 3
// Output: 2
// Explanation: 3 is present in the 2nd index

// Example 2:
// Input: arr[]= 5 4 3 2 1, num = 5
// Output: 0
// Explanation: 5 is present in the 0th index