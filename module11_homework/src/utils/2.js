// Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет,
// начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

export function countDown(n) {
    if (n < 1) return "Число не может быть меньше единицы."

    let result = []
    for (let i = n; i>=1; i--)
        result.push(i);
    return result
}