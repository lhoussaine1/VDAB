"use strict";

class Persoon {
  constructor(voornaam, familienaam) {
    this.voornaam = voornaam;
    this.familienaam = familienaam;
  }

  getNaam() {
    return `${this.voornaam} ${this.familienaam}`;
  }
}

class KlassiekGezin {
  constructor(papa, mama) {
    this.papa = papa;
    this.mama = mama;
    this.kinderen = [];
  }

  voegKindToe(persoon) {
    this.kinderen.push(persoon);
  }

  getPapa() {
    return this.papa.getNaam();
  }

  getMama() {
    return this.mama.getNaam();
  }

  getKinderen() {
    return this.kinderen.map(kind => kind.getNaam());
  }
}

const papa = new Persoon("John", "Doe");
const mama = new Persoon("Elena", "Burger");

const gezin = new KlassiekGezin(papa, mama);

const kind1 = new Persoon("Alice", "Doe");
const kind2 = new Persoon("Bob", "Doe");

gezin.voegKindToe(kind1);
gezin.voegKindToe(kind2);

console.log(`Papa: ${gezin.getPapa()}`);
console.log(`Mama: ${gezin.getMama()}`);
console.log(`Kinderen: ${gezin.getKinderen().join(", ")}`);

