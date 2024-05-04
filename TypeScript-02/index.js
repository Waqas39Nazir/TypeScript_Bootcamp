// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log("C:",c)
// enum Color1 {Red = 5, Green, Blue};
// var colorName: string = Color1[6];
// console.log(colorName);
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
var Numbers;
(function (Numbers) {
    Numbers[Numbers["Value1"] = 15] = "Value1";
    Numbers[Numbers["Value2"] = 16] = "Value2";
    Numbers[Numbers["Value3"] = 17] = "Value3";
    Numbers[Numbers["Value4"] = 18] = "Value4";
    Numbers[Numbers["Value5"] = 19] = "Value5";
})(Numbers || (Numbers = {}));
//case one
const selectedNumber = Numbers.Value4;
console.log("Selected NUmber:", selectedNumber);
//case two....get the number by value
const valueTwo = Numbers[16];
//Note Numbers.Value1 (Numer.keyName return the value and if we usd number[value of key] this will return the Key Name)
console.log("Value Two (Key):", valueTwo);
var Number2;
(function (Number2) {
    Number2[Number2["Value1"] = 11] = "Value1";
    Number2["Value2"] = "waqas";
    Number2[Number2["Value3"] = 13] = "Value3";
    Number2[Number2["Value4"] = 14] = "Value4";
    Number2[Number2["Value5"] = 15] = "Value5";
})(Number2 || (Number2 = {}));
console.log("Number2.Value1:", Number2.Value1);
console.log("Number2[Value1]:", Number2["Value1"]);
console.log("Number2.Value2:", Number2.Value2);
export {};
