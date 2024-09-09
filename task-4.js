/**
 * YOU ARE GIVEN AN ARRAY OF PHONE OBJECTS, EACH CONTAINING INFORMATION ABOUT THE MODEL, BRAND, AND PRICE. YOUR TASK IS TO WRITE A JAVASCRIPT FUNCTION NAMED FINDAVERAGEPHONEPRICE THAT TAKES THIS ARRAY AS INPUT AND RETURNS THE AVERAGE PRICE OF PHONE.
 * 
 *     const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */
function findAveragePhonePrice (phones){
    const totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0);

    const averagePrice = totalPrice / phones.length;

    return Math.round(averagePrice);
    
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
console.log(findAveragePhonePrice(phones));