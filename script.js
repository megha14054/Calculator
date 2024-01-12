let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let history = [];

function appendCharacter(char) {
    if (char === '.' && screenValue.includes('.')) {
        return;
    }

    screenValue += char;
    updateDisplay();
}

function updateDisplay() {
    screen.value = screenValue;
}

function calculate() {
    try {
        const result = eval(screenValue);
        const operation = screenValue + ' = ' + result;
        screenValue = result.toString();
        updateDisplay();
        addToHistory(operation);
    } catch (error) {
        clearScreen();
        alert('Error: ' + error.message);
    }
}

function clearScreen() {
    screenValue = '';
    updateDisplay();
}

function addToHistory(operation) {
    history.push(operation);
}

function showHistory() {
    if (history.length > 0) {
        const historyString = history.join('\n');
        alert('Calculation History:\n' + historyString);
    } else {
        alert('Calculation History is empty.');
    }
}
