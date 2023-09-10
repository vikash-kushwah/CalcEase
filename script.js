function clearDisplay() {
    document.forms[0].display.value = '';
}

function deleteLast() {
    const display = document.forms[0].display;
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.forms[0].display;
    display.value += value;
}

function calculate() {
    const display = document.forms[0].display;
    let expression = display.value;
    // Replace leading zeros before subtraction
    // expression = expression.replace(/(^|[-+*/])(0\d+)/g, (_, p1, p2) => p1 + parseInt(p2, 8));
    expression = expression.replace(/(^|[-+*/])(0\d+)/g, (_, p1, p2) => p1 + BigInt(parseFloat(p2)));
    try {
        display.value = String(eval(expression));
    } catch (error) {
        display.value = 'Error';
    }
}