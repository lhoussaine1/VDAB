"use strict";

class Huisdier {
  #naam;

  constructor(naam) {
    this.#naam = naam;
  }

  getNaam() {
    return this.#naam;
  }
}

class Hond extends Huisdier {
  getGeluid() {
    return "woef";
  }
}

class Kat extends Huisdier {
  getGeluid() {
    return "miauw";
  }
}

const huisdieren = [
  new Hond("Max"),
  new Hond("Bobi"),
  new Kat("Nano"),
  new Kat("Mickey")
];

for (const huisdier of huisdieren) {
  console.log(huisdier.getNaam(), "zegt", huisdier.getGeluid());
}