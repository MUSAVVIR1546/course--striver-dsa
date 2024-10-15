//1
// function findSecondSmallest(arr) {
//     if (arr.length <= 1) return -1;
//     let unique = [...new Set(arr)];
//     let sorted = unique.sort((a, b) => a - b);
//     return {
//         secondSmallest: sorted[1],
//         secondLargest: sorted[sorted.length - 2]
//     }
// }

//2
function findSecondSmallest(arr) { 
    if (arr.length <= 1) return -1;
    let unique = [...new Set(arr)].sort((a,b) => a - b);
    return [unique[1], unique[unique.length - 2]]
}

console.log(findSecondSmallest([1, 2, 4, 7, 7, 5]));
console.log(findSecondSmallest([1, 5, 3, 2, 8, 9]));
console.log(findSecondSmallest([1]));
