function convertTemperature(value, from, to) {
    if (isNaN(value)) return '';
    let celsius;
    // Convert from source to Celsius
    switch (from) {
        case 'C':
            celsius = value;
            break;
        case 'F':
            celsius = (value - 32) * 5 / 9;
            break;
        case 'K':
            celsius = value - 273.15;
            break;
        default:
            return '';
    }
    // Convert from Celsius to target
    switch (to) {
        case 'C':
            return celsius;
        case 'F':
            return (celsius * 9 / 5) + 32;
        case 'K':
            return celsius + 273.15;
        default:
            return '';
    }
}

document.getElementById('convertBtn').addEventListener('click', function () {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputTemp)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }
    if (inputUnit === outputUnit) {
        resultDiv.textContent = `${inputTemp} ${unitLabel(outputUnit)}`;
        return;
    }
    const result = convertTemperature(inputTemp, inputUnit, outputUnit);
    resultDiv.textContent = `${inputTemp} ${unitLabel(inputUnit)} = ${round(result)} ${unitLabel(outputUnit)}`;
});

function round(num) {
    return Math.round(num * 100) / 100;
}

function unitLabel(unit) {
    switch (unit) {
        case 'C': return '°C';
        case 'F': return '°F';
        case 'K': return 'K';
        default: return '';
    }
}