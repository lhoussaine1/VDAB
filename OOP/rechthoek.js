"use strict";

class Rechthoek {
  #lengte;
  #breedte;

  constructor(lengte, breedte) {
    this.#lengte = lengte;
    this.#breedte = breedte;
  }

  getOmtrek() {
    return 2 * (this.#lengte + this.#breedte);
  }

  getOppervlakte() {
    return this.#lengte * this.#breedte;
  }

  setAfmetingen(lengte, breedte) {
    this.#lengte = lengte;
    this.#breedte = breedte;
  }
}

const ingevoerdeLengte = parseFloat(prompt("Voer de lengte in (in m):"));
const ingevoerdeBreedte = parseFloat(prompt("Voer de breedte in (in m):"));

const rechthoek = new Rechthoek(ingevoerdeLengte, ingevoerdeBreedte);

console.log("Omtrek:", rechthoek.getOmtrek(), "m");
console.log("Oppervlakte:", rechthoek.getOppervlakte(), "m²");
