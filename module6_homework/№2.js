function numberCheck(num) {

    if ((num === 0) || (num === 1))
        return (num + " - число непростое")

    if (num > 1000)
        return ("Данные неверны");
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return (num + " - Число непростое");
        }
        return (num + " - Число простое");
    }
}

console.log(numberCheck(0));