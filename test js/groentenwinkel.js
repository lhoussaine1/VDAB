"use strict";
    let totaalBedrag = 0;

    geefGroenten();
    document.getElementById("toevoegen").onclick = function() {
      if (invoerCorrect()) {
        toevoegen();
      }
    };

    async function geefGroenten() {
      const response = await fetch("groenten.json");
      if (response.ok) {
        const groenten = await response.json();
        vulGroenten(groenten);
      } 
    };

    function vulGroenten(groenten) {
      const selectGroente = document.getElementById("groente");
      let index = 0;
      for (const groente of groenten) {
        const option = document.createElement("option");
        option.innerText = `${groente.naam} (€${groente.prijs}/${groente.eenheid})`;
        option.dataset.index = index++;
        selectGroente.appendChild(option);
      }
    };

    function invoerCorrect() {
      const fouteElementen =
        document.querySelectorAll("input:invalid,select:invalid");
      for (const element of fouteElementen) {
        document.getElementById(`${element.id}Fouten`).hidden = false;
      }
      const correcteElementen = document.querySelectorAll("input:valid,select:valid");
      for (const element of correcteElementen) {
        document.getElementById(`${element.id}Fouten`).hidden = true;
      }
      return fouteElementen.length === 0;
    };


    async function toevoegen() {
      const jsonFile = await fetch("groenten.json");
      if (jsonFile.ok) {
        const groenten = await jsonFile.json();
        const groenteSelect = document.getElementById("groente");
        const geselecteerdeIndex = groenteSelect.selectedIndex;
        const geselecteerdeGroente = groenteSelect.options[geselecteerdeIndex].value;

        if (geselecteerdeGroente !== "--- maak uw keuze ---") {
          for (const groente of groenten) {
            if (geselecteerdeGroente.includes(groente.naam)) {
              const tbody = document.querySelector("tbody");
              const row = tbody.insertRow();
              const groenteCell = row.insertCell();
              groenteCell.innerText = groente.naam;
              const aantalCell = row.insertCell();
              aantalCell.innerText = document.getElementById("aantal").value;
              const prijsCell = row.insertCell();
              prijsCell.innerText = groente.prijs;
              const teBetalenBedrag = document.getElementById("aantal").value * groente.prijs;
              const teBetalenCell = row.insertCell();
              teBetalenCell.innerText = teBetalenBedrag.toFixed(2);
              totaalBedrag += teBetalenBedrag;
          const verwijderCell = row.insertCell();
          const hyperlink = document.createElement("a");
          hyperlink.href = "#";
          const img = document.createElement("img");
          img.src = "/vuilbak.png";
          hyperlink.appendChild(img);
          verwijderCell.appendChild(hyperlink);
          hyperlink.onclick = function () {
            totaalBedrag -= teBetalenBedrag;
            tbody.deleteRow(row.rowIndex);
            updateTotaalBedrag();
          };
        }
      }
      updateTotaalBedrag();
    }
  }
}

function updateTotaalBedrag() {
  document.querySelector("tfoot td").innerText = `€${totaalBedrag.toFixed(2)}`;
}