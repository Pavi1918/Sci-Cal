let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateFunction(func) {
    let value = parseFloat(display.value);
    
    switch (func) {
        case 'sqrt':
            display.value = Math.sqrt(value);
            break;
        case 'pow':
            display.value = Math.pow(value, 2);
            break;
        case 'sin':
            display.value = Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            display.value = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            display.value = Math.tan(value * Math.PI / 180);
            break;
        case 'log':
            display.value = Math.log10(value);
            break;
    }
}

function toggleScientific() {
    let sciButtons = document.getElementById('scientific-buttons');
    if (sciButtons.style.display === 'none') {
        sciButtons.style.display = 'grid';
    } else {
        sciButtons.style.display = 'none';
    }
}
