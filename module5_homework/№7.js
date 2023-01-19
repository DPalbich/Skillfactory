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