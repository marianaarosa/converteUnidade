function calculatemilesKm() {
  let miles = document.getElementById("miles").value;

  if (miles == "") {
    alert("Por favor, forneça o número em milhas");
    return;
  }

  let resultKm = parseFloat(miles) * (1.60934);
  document.getElementById("resultKm").value = resultKm;

}

function calculatekmMiles() {
  let km = document.getElementById("km").value;

  if (km == "") {
    alert("Por favor, forneça o número em Km");
    return;
  }
  let resultMiles = parseFloat(km) / (1.60934);
  document.getElementById("resultMiles").value = resultMiles;

}

function clearForm() {
  document.getElementById("miles").value = "";
  document.getElementById("km").value = "";
  document.getElementById("resultKm").value = "";
  document.getElementById("resultMiles").value = "";

}
