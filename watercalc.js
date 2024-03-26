function calculateFlowRate() {
  var diameter = parseFloat(document.getElementById('diameter').value);
  var diameterUnit = document.getElementById('diameter-unit').value;
  var velocity = parseFloat(document.getElementById('velocity').value);
  var velocityUnit = document.getElementById('velocity-unit').value;
  var resultElement = document.getElementById('resultFlow');

  // Convert units if necessary
  if (diameterUnit === 'cm') {
      diameter /= 100; // Convert centimeters to meters
  } else if (diameterUnit === 'feet') {
      diameter *= 0.3048; // Convert feet to meters
  }

  if (velocityUnit === 'm/s') {
      velocity *= 0.3048; // Convert m/s to ft/s
  }

  if (isNaN(diameter) || isNaN(velocity)) {
      resultElement.textContent = "Please enter valid values.";
  } else {
      var flowRate = (Math.PI * Math.pow(diameter, 2) * velocity) / 4;
      resultElement.textContent = "Water flow rate (GPM): " + flowRate.toFixed(2);
  }
}

function resetFlowRate() {
  document.getElementById('diameter').value = '';
  document.getElementById('velocity').value = '';
  document.getElementById('resultFlow').textContent = '';
}

function calculateTonnage() {
  var deltaT = parseFloat(document.getElementById('deltaT').value);
  var flowRate = parseFloat(document.getElementById('flowRate').value);
  var resultElement = document.getElementById('resultTon');

  if (isNaN(deltaT) || isNaN(flowRate)) {
      resultElement.textContent = "Please enter valid values.";
  } else {
      // Calculate tonnage using the formula: Tonnage = (500 * ΔT * GPM) / 12,000
      var tonnage = (500 * deltaT * flowRate) / 12000;
      resultElement.textContent = "Required Tonnage: " + tonnage.toFixed(2) + " Tons";
  }
}

function resetTonnage() {
  document.getElementById('deltaT').value = '';
  document.getElementById('flowRate').value = '';
  document.getElementById('resultTon').textContent = '';
}

