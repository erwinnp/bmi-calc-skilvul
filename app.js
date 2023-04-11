// BMI Calculator
//calcuate bmi
const getBMI = (e) => {
  e.preventDefault();
  let weight = parseInt(document.querySelector("#weight").value);
  let height = parseInt(document.querySelector("#height").value);
  let result = document.querySelector(".result__text");
  let alertText = document.querySelector(".alert__text");
  let bmi;

  //validation
  if ((height === "" || isNaN(height)) && (weight === "" || isNaN(weight))) {
    alertText.innerHTML = "Semua field harus diisi terlebih dahulu!";
  } else if (weight === "" || isNaN(weight)) {
    alertText.innerHTML = "Berat badan harus diisi terlebih dahulu!";
  } else if (height === "" || isNaN(height)) {
    alertText.innerHTML = "Tinggi badan harus diisi terlebih dahulu!";
  } else if (weight === 0 || height === 0) {
    alertText.innerHTML = "Semua field tidak boleh bernilai 0!";
  } else {
    alertText.innerHTML = "";
    bmi = weight / Math.pow(height / 100, 2).toFixed(1);
  }

  //BMI Result
  if (bmi < 18.5) {
    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(
      1
    )}</strong>, which means You're <strong>Underweight</strong>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(
      1
    )}</strong>, which means You're <strong>Normal</strong>`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(
      1
    )}</strong>, which means You're <strong>Overweight</strong>`;
  } else {
    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(
      1
    )}</strong>, which means You're <strong>Obesity</strong>`;
  }
};

document.getElementById("submit-btn").addEventListener("click", getBMI);
