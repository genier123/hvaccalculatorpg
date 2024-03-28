function changeTemperatureInput() {
    var tempUnit = document.getElementById('temp-unit').value;
    var temperatureInput = document.getElementById('temperature');
    
    if (tempUnit === 'F') {
        temperatureInput.value = "70";
    } else if (tempUnit === 'C') {
        temperatureInput.value = "21.1";
    }
}

function changePressureInput() {
    var pressureUnit = document.getElementById('pressure-unit').value;
    var pressureInput = document.getElementById('pressure');
    
    if (pressureUnit === 'psi') {
        pressureInput.value = "14.7";
    } else if (pressureUnit === 'mb') {
        pressureInput.value = "1013.25";
    }
}

function calculateDewPoint() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var pressure = parseFloat(document.getElementById('pressure').value);
    var humidity = parseFloat(document.getElementById('humidity').value);
    
    if (isNaN(temperature) || isNaN(pressure) || isNaN(humidity) || humidity < 0 || humidity > 100) {
        alert("Please enter valid values for temperature, pressure, and relative humidity (between 0 and 100).");
        return;
    }

    var tempUnit = document.getElementById('temp-unit').value;
    if (tempUnit === 'F') {
        // Convert Fahrenheit to Celsius
        temperature = (temperature - 32) * (5/9);
    }

    var pressureUnit = document.getElementById('pressure-unit').value;
    if (pressureUnit === 'psi') {
        // Convert PSI to millibars
        pressure *= 68.9476;
    }

    // Constants for the dew point calculation
    var a = 17.27;
    var b = 237.7;

    // Saturation vapor pressure (in hPa) at given temperature
    var saturationVaporPressure = 6.112 * Math.exp((17.67 * temperature) / (temperature + 243.5));

    // Actual vapor pressure (in hPa) from relative humidity
    var actualVaporPressure = saturationVaporPressure * (humidity / 100);

    // Dew point calculation
    var dewPoint = (b * (Math.log(actualVaporPressure / 6.112))) / (a - (Math.log(actualVaporPressure / 6.112)));

    // Convert dew point to Fahrenheit if necessary
    if (tempUnit === 'F') {
        dewPoint = dewPoint * (9/5) + 32;
    }
    
    document.getElementById('result').innerHTML = "Dew Point: " + dewPoint.toFixed(1) + " " + tempUnit;
}

function resetCalculator() {
    document.getElementById('temperature').value = "70";
    document.getElementById('temp-unit').value = "F";
    document.getElementById('pressure').value = "14.7";
    document.getElementById('pressure-unit').value = "psi";
    document.getElementById('humidity').value = "40";
    document.getElementById('result').innerHTML = "";
}
