let cars = new Map();
cars.set("LADA", "Granta");
cars.set("Toyota", "Chaser");
cars.set("Reno", "Logan");


for (let car of cars.keys()) {
    console.log(car + " - " + cars.get(car));
}