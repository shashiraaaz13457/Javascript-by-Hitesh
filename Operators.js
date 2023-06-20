// var num1 = 7;
// var num2 = 6;

// console.log(num1*num2);

// It gives a boolean value.
// var answer = num1 > num2;

// console.log(answer);

// Discount = (listprice - Sellingprice)/listprice * 100
// D = (L - S)/L * 100;

var Sellingprice = 199;
var listingprice = 799;

var DiscountPercent =(( listingprice - Sellingprice)/ listingprice) *100;

console.log("Discount percentage is: "+ DiscountPercent);

// It will round up to the integer value.
displayDiscountPercentage = Math.round(DiscountPercent);

console.log(displayDiscountPercentage + "% off");

// To know which type of data type it is we use typeof.
var result = listingprice > Sellingprice;
console.log(typeof result);