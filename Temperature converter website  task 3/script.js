document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    resultDiv.textContent = '';  // Clear previous result
    errorDiv.textContent = '';    // Clear previous error

    if (isNaN(tempInput)) {
        errorDiv.textContent = 'Please enter a valid number!';
        return;
    }

    let result;
    switch (unit) {
        case 'Celsius':
            result = `Fahrenheit: ${(tempInput * 9/5) + 32} °F`;
            result += ` | Kelvin: ${tempInput + 273.15} K`;
            break;
        case 'Fahrenheit':
            result = `Celsius: ${(tempInput - 32) * 5/9} °C`;
            result += ` | Kelvin: ${(tempInput - 32) * 5/9 + 273.15} K`;
            break;
        case 'Kelvin':
            result = `Celsius: ${tempInput - 273.15} °C`;
            result += ` | Fahrenheit: ${(tempInput - 273.15) * 9/5 + 32} °F`;
            break;
    }

    resultDiv.textContent = result;
});
