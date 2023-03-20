const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
render();

convertBtn.addEventListener("click", render);
// inputEl.addEventListener("keyup", render)

function render() {
  let enteredValue = inputEl.value;

  lengthEl.innerHTML = `
        ${enteredValue} meters = ${(enteredValue * meterToFeet).toFixed(3)} feet | 
        ${enteredValue} feet = ${(enteredValue / meterToFeet).toFixed(3)} meters
    `;

  volumeEl.innerHTML = `
        ${enteredValue} liters = ${(enteredValue * literToGallon).toFixed(3)} gallons | 
        ${enteredValue} gallons = ${(enteredValue / literToGallon).toFixed(3)} liters
    `;

  massEl.innerHTML = `
        ${enteredValue} kilos = ${(enteredValue * kiloToPound).toFixed(3)} pounds | 
        ${enteredValue} pounds = ${(enteredValue / kiloToPound).toFixed(3)} kilos
    `;
}
