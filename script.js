document.getElementById("convertBtn").addEventListener("click", function() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    let result;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return; // Exit the function if input is invalid
    }

    switch (inputUnit) {
        case "Celsius":
            result = `Fahrenheit: ${(inputTemp * 9/5) + 32} °F, Kelvin: ${inputTemp + 273.15} K`;
            break;
        case "Fahrenheit":
            result = `Celsius: ${(inputTemp - 32) * 5/9} °C, Kelvin: ${((inputTemp - 32) * 5/9) + 273.15} K`;
            break;
        case "Kelvin":
            result = `Celsius: ${inputTemp - 273.15} °C, Fahrenheit: ${(inputTemp - 273.15) * 9/5 + 32} °F`;
            break;
        default:
            result = "Please select a unit .";
    }

    const resultElement = document.getElementById("result");
    resultElement.innerText = result;
    resultElement.style.opacity = 0; // Start with hidden result
    setTimeout(() => {
        resultElement.style.opacity = 1; // Fade in effect
    }, 100);
});