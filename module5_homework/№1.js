let value = prompt("Введите значение:");
console.log(value);

if ( (typeof(+value) == "number") && (!isNaN(+value)) && ((+value) % 2 === 0) )
  console.log("Число четное");
else if ( (typeof(+value) == "number") && (!isNaN(+value)) && ((+value) % 2 === 1) )
  console.log("Число нечетное")
else
  console.log("Упс, кажется, вы ошиблись");
  