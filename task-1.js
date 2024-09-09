/**
 * FIND THE LOWEST NUMBER IN THE ARRAY BELOW.
 * CONST HEIGHTS2 = [167, 190, 120, 165, 137];
 */

// function findLowestNumber (low){

//     let lowest = low[0];
//     for(let i = 1; i < low.length; i++){
//         if(low[i] < lowest){
//             lowest = low[i];
//         }
//     }
//     return lowest;
// }
// const heights2 = [167, 190, 120, 165, 137];
// console.log(findLowestNumber(heights2));

let heights2 = [167, 190, 120, 165, 137];

let lowestNumber = Math.min(...heights2);
console.log(lowestNumber);
