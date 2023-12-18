"use strict";

class Bankrekening {
  #saldo = 0;

  stort(bedrag) {
    if (bedrag > 0) {
      this.#saldo += bedrag;
      console.log(`Storting van ${bedrag} euro succesvol. Nieuw saldo: ${this.#saldo} euro.`);
    } else {
      console.log("Ongeldig stortingsbedrag. Bedrag moet positief zijn.");
    }
  }

  haalAf(bedrag) {
    if (bedrag > 0 && bedrag <= this.#saldo) {
      this.#saldo -= bedrag;
      console.log(`Opname van ${bedrag} euro succesvol. Nieuw saldo: ${this.#saldo} euro.`);
    } else {
      console.log("Ongeldig opnamebedrag. Bedrag moet positief zijn en mag niet hoger zijn dan het saldo.");
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const rekening = new Bankrekening();

console.log("Huidig saldo:", rekening.getSaldo());
rekening.stort(100);
rekening.stort(-25);  
rekening.haalAf(29);
rekening.haalAf(-200);  
rekening.haalAf(40);  
console.log("Eindsaldo:", rekening.getSaldo());

