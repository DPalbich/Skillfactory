function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function () {
    console.log(this.name + " подключен!");
    this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function () {
    if (this.isPlugged)
        return this.power;
    else
        return 0;
}


const lampa = new ElectricalAppliance('lampa', 40);
const tv = new ElectricalAppliance('tv', 250);

console.log("Электроприборы не подключены, потребляемая мощность =", lampa.getPowerUsed() + tv.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log("Суммарная мощность =", + lampa.getPowerUsed() + tv.getPowerUsed());