// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

// console.log("C:",c)
// enum Color1 {Red = 5, Green, Blue};
// var colorName: string = Color1[6];
// console.log(colorName);

// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

enum Numbers {
  Value1 = 15,
  Value2,
  Value3,
  Value4,
  Value5,
}

//case one
const selectedNumber: Numbers = Numbers.Value4;
console.log("Selected NUmber:", selectedNumber);

//case two....get the number by value
const valueTwo: string = Numbers[16];

//Note Numbers.Value1 (Numer.keyName return the value and if we usd number[value of key] this will return the Key Name)

console.log("Value Two (Key):", valueTwo);

enum Number2 {
  Value1 = 11,
  Value2 = "waqas",
  Value3 = 13,
  Value4 = 14,
  Value5 = 15,
}
console.log("Number2.Value1:", Number2.Value1);
console.log("Number2[Value1]:", Number2["Value1"]);
console.log("Number2.Value2:", Number2.Value2);
