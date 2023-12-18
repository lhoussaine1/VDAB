"use strict";

class LandVoertuig {
  constructor(maximumAantalPersonen, aantalWielen) {
    this.maximumAantalPersonen = maximumAantalPersonen;
    this.aantalWielen = aantalWielen;
  }

  info() {
    return `LandVoertuig - Maximum aantal personen: ${this.maximumAantalPersonen}, Aantal wielen: ${this.aantalWielen}`;
  }
}

class Voertuig {
  constructor(maximumAantalPersonen) {
    this.maximumAantalPersonen = maximumAantalPersonen;
  }

  info() {
    return `Voertuig - Maximum aantal personen: ${this.maximumAantalPersonen}`;
  }
}

class Fiets extends LandVoertuig {
  constructor(maximumAantalPersonen, aantalWielen, aantalVersnellingen) {
    super(maximumAantalPersonen, aantalWielen);
    this.aantalVersnellingen = aantalVersnellingen;
  }

  info() {
    return `${super.info()}, Fiets - Aantal versnellingen: ${this.aantalVersnellingen}`;
  }
}

class Vaartuig {
  constructor(maximumAantalPersonen, diepgang) {
    this.maximumAantalPersonen = maximumAantalPersonen;
    this.diepgang = diepgang;
  }

  info() {
    return `Vaartuig - Maximum aantal personen: ${this.maximumAantalPersonen}, Diepgang: ${this.diepgang}`;
  }
}

class Duikboot extends Vaartuig {
  constructor(maximumAantalPersonen, diepgang, maximumDuikDiepte) {
    super(maximumAantalPersonen, diepgang);
    this.maximumDuikDiepte = maximumDuikDiepte;
  }

  info() {
    return `${super.info()}, Duikboot - Maximum duikdiepte: ${this.maximumDuikDiepte}`;
  }
}

const fiets = new Fiets(2, 2, 5);
const duikboot = new Duikboot(10, 10, 1000);
console.log(fiets.info());
console.log(duikboot.info());