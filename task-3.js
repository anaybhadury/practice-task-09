/**
 * YOUR TASK IS TO CALCULATE THE TOTAL BUDGET REQUIRED TO BUY ELECTRONICS.
 * LAPTOP = 35000 TK
 * TABLET = 15000 TK
 * MOBILE = 20000 TK
 * WRITE A JAVASCRIPT FUNCTION NAMES CALCULATEELECTRONICSBUDGET THAT TAKES IN THE NUMBER OF LAPTOP, TABLETS, AND MOBILE AND RETURNS THE TOTAL MONEY REQUIRED.
 */
let laptop = 35000;
let tablet = 15000;
let mobile = 20000;
let quantityLaptop = 1;
let quantityTablet = 1;
let quantityMobile = 1;
let total = (laptop * quantityLaptop) + (tablet * quantityTablet) + (mobile * quantityMobile);

console.log(total);

// -----------------------------------

// function calculateElectronicsBudget (laptopQuantity, tabletQuantity, mobileQuantity){
//     let laptopPrice = 35000;
//     let tabletPrice = 15000;
//     let mobilePrice = 20000;

//     let totalBudget = (laptopQuantity * laptopPrice) + (tabletQuantity * tabletPrice) + (mobileQuantity * mobilePrice);
    
//     return totalBudget;
// }
// let result = calculateElectronicsBudget(1, 1, 1);
// console.log(result);












// function calculateElectronicsBudget (numLaptop, numTablets, numMobile){
//     const laptopPrice = 35000;
//     const tabletPrice = 15000;
//     const mobilePrice = 20000;

//     const totalBudget = (numLaptop * laptopPrice) + (numTablets * tabletPrice) + (numMobile * mobilePrice);

//     return totalBudget;
// }
// let laptops = 2;
// let tablets = 1;
// let mobiles = 3;
// console.log(calculateElectronicsBudget(laptops, tablets, mobiles));