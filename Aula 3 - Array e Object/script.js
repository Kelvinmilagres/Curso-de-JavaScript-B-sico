// o que são veotres ou arrays

// como declarar um array
let Array = ["string", 1, true];
console.log(array);

// pode guardar vários tipos de dados
let array = [
  "string",
  1,
  true,
  ["array 1"],
  ["array 2"],
  ["array 3"],
  ["array 4"],
];
console.log(Array[3]);

// forEach
Array.forEach(function (item, index) {
  console.log(item, index);
});

array.push("novo item");
console.log(Array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift("novo item no inicio");
console.log(array);

console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array);

let novArray = array.slice(0, 3);
console.log(novoArray);

let object = { string: "string", number: 1, boolean: true, array: ["array"] };

console.log(object.boolean);

let string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);
