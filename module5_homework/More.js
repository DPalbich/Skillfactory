
let value = prompt("Введите значение:");
console.log(value);

if ((typeof (+value) == 'number') && (!isNaN(+value))) {
    if (value % 2 === 0)
        console.log("Число является четным");
    else
        console.log("Число является НЕ четным");
}
else
    console.log("Упс, кажется, вы ошиблись");

//
let x;

if ((typeof x === "number") && (!isNaN(x)))
    console.log("x - число");
else if (typeof x === "string")
    console.log("x - строка");
else if (typeof x === "boolean")
    console.log("x - логический тип");

//
let string = "hello world";

let reverse = string.split("").reverse().join("");

console.log(reverse);

//

let max = 101
let int = Math.floor(Math.random() * max);

console.log(int);

//

let arr = [1, 2, 3];

console.log(arr.length, "\n// ---------------- //");


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//

let array = [1, 1, 1];

let sameArray = true;
for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] !== array[j])
            sameArray = false;
    }
}

if (sameArray)
    console.log("true");
else
    console.log("false");


//

let arr = [0, 1, 2, 3, 4, null, "a"];

let elementsZero = 0;
let elementsOther = 0;
let elementsEven = 0;
let elementsOdd = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0)
        elementsZero++;

    else if ((typeof (arr[i]) === "string") || (typeof (arr[i]) === "boolean") || (typeof (arr[i]) === "object"))
        elementsOther++;

    else if ((typeof (arr[i]) == "number") && (arr[i] !== 0) && (arr[i] % 2 === 0))
        elementsEven++;

    else
        elementsOdd++;
}

console.log("Кол-во элементов нулевых " + elementsZero);
console.log("Кол-во остальных элементов " + elementsOther);
console.log("Кол-во четных элементов " + elementsEven);
console.log("Кол-во НЕ четных элементов " + elementsOdd);

//

let cars = new Map();
cars.set("LADA", "Granta");
cars.set("Toyota", "Chaser");
cars.set("Reno", "Logan");


for (let car of cars.keys()) {
    console.log(car + " - " + cars.get(car));
}




/////////
////////
///////