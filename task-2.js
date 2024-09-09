/**
 * FIND THE FRIEND WITH THE SMALLEST NAME.
 * CONST HEIGHTS2 = ['RAHIM', 'ROBIN', 'RAFI', 'RON', 'RASHED'];
 */


function friendSmallestName (small){
    let smallestName = small[0];

    for(let i = 1; i < small.length; i++){
        if(small[i].length < smallestName.length){
            smallestName = small[i];
        }
    }
    return smallestName;
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(friendSmallestName(heights2));