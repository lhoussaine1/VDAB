"use strict";

class HogerLager {
  #teRadenGetal = Math.floor(Math.random() * 10) + 1;
  #aantalPogingen = 0;

  gok(getal) {
    this.#aantalPogingen++;

    if (getal < this.#teRadenGetal) {
      return "Hoger";
    }

    if (getal > this.#teRadenGetal) {
      return "Lager";
    }

    return "Gewonnen";
  }

  getTeRadenGetal() {
    return this.#teRadenGetal;
  }

  getAantalPogingen() {
    return this.#aantalPogingen;
  }
}

const hogerLager = new HogerLager();
let getal = Number(prompt("Raad het getal tussen 1 en 10:"));
let resultaat = hogerLager.gok(getal);

while (resultaat !== "Gewonnen") {
  getal = Number(prompt(`${resultaat}, raad opnieuw: `));
  resultaat = hogerLager.gok(getal);
}

alert(`Gefeliciteerd! Je hebt het getal ${hogerLager.getTeRadenGetal()} geraden in ${hogerLager.getAantalPogingen()} pogingen.`);
