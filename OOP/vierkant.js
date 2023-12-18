"use strict";

class Vierkant {
  #zijde;

  constructor(zijde) {
    this.#zijde = zijde;
  }

  getOmtrek() {
    return this.#zijde * 4;
  }

  getOppervlakte() {
    return this.#zijde * this.#zijde;
  }
}

const vierkanten = [new Vierkant(7), new Vierkant(9)];
let totaleOmtrek = 0;
let totaleOppervlakte = 0;

for (const vierkant of vierkanten) {
  console.log("Omtrek:", vierkant.getOmtrek(), "cm",
    ", oppervlakte:", vierkant.getOppervlakte(), "cm²");
  totaleOmtrek += vierkant.getOmtrek();
  totaleOppervlakte += vierkant.getOppervlakte();
}

console.log("Totale omtrek:", totaleOmtrek, "cm", 
  ", totale oppervlakte:", totaleOppervlakte, "cm²");