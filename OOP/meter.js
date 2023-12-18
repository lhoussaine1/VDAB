"use strict";

class Meter {
  _afstand;

  constructor(afstand) {
    this._afstand = afstand;
  }

  naarInches() {
    return this._afstand * 39.37;
  }

  naarYards() {
    return this._afstand * 1.0936;
  }
}

const ingevoerdeAfstand = parseFloat(prompt("Voer de afstand in meters in:"));

const meterObject = new Meter(ingevoerdeAfstand);

console.log(`${meterObject._afstand} meter is gelijk aan ${meterObject.naarInches()} inches.`);
console.log(`${meterObject._afstand} meter is gelijk aan ${meterObject.naarYards()} yards.`);
