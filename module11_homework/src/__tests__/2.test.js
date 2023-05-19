import { countDown } from "../utils/2";

// Успешное выполнение функции

describe("Тест countDown функции", ()=> {
    it("Обратный отчет", () =>
    expect(countDown(2)).toEqual([2, 1]));
});

// Неуспешное выполнение функции

describe("Тест countDown функции 2", ()=> {
    it("Обратный отчет 2", () =>
    expect(countDown(0)).toEqual("Число не может быть меньше единицы."));
});

// unit-tests

describe("Тест countDown функции 3", ()=> {
    it("Обратный отчет", () => {
    expect(countDown(5)).toEqual([5, 4, 3, 2, 1])
    expect(countDown(4)).toEqual([4, 3, 2, 1])
    expect(countDown(3)).toEqual([3, 2, 1])
    });
});