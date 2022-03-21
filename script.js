// Table of Contents

// Parameters
// Math Buttons
// Clear buttons
// Keyboard Support
// Number Buttons
// Math Functions 
// Master Operation
// Populate and clear display areas
// On-Off Switch

// Parameters
let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let functionHolder = "";
let newResult = true;

// Math Buttons
const multipButton = document.getElementById("multiplication");
multipButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        functionHolder = multiplication;
        populateEquation(firstNumber, " * ");
        clearDisplay();
    } else if (firstNumber && functionHolder && display.textContent == "0") {
        // Failsafe for incorrect function called
        functionHolder = multiplication;
        populateEquation(firstNumber, " * ");
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        functionHolder = multiplication;
        populateEquation(firstNumber, " * ");
        clearDisplay();
    }
});

const divideButton = document.getElementById("division");
divideButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        functionHolder = division;
        populateEquation(firstNumber, " / ");
        clearDisplay();
    } else if (firstNumber && functionHolder && display.textContent == "0") {
        functionHolder = division;
        populateEquation(firstNumber, " / ");
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        functionHolder = division;
        populateEquation(firstNumber, " / ");
        clearDisplay();
    }
});

const minusButton = document.getElementById("subtraction");
minusButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        functionHolder = subtraction;
        populateEquation(firstNumber, " - ");
        clearDisplay();
    } else if (firstNumber && functionHolder && display.textContent == "0") {
        functionHolder = subtraction;
        populateEquation(firstNumber, " - ");
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        functionHolder = subtraction;
        populateEquation(firstNumber, " - ");
        clearDisplay();
    }
});

const addButton = document.getElementById("addition");
addButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        functionHolder = addition;
        populateEquation(firstNumber, " + ");
        clearDisplay();
    } else if (firstNumber && functionHolder && display.textContent == "0") {
        functionHolder = addition;
        populateEquation(firstNumber, " + ");
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = display.textContent;
        functionHolder = addition;
        populateEquation(firstNumber, " + ");
        clearDisplay();
    }
});

const exponentButton = document.getElementById("exponent");
exponentButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        functionHolder = exponent;
        populateEquation(firstNumber, "^ ");
        clearDisplay();
    } else if (firstNumber && functionHolder && display.textContent == "0") {
        functionHolder = exponent;
        populateEquation(firstNumber, "^ ");
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        functionHolder = exponent;
        populateEquation(firstNumber, "^ ");
        clearDisplay();
    }
});

const squareButton = document.getElementById("square");
squareButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        secondNumber = "";
        functionHolder = square;
        returnResults();
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        secondNumber = "";
        functionHolder = square;
        returnResults();
    }
});

const sqrtButton = document.getElementById("sqrt");
sqrtButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        secondNumber = "";
        functionHolder = squareroot;
        returnResults();
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        secondNumber = "";
        functionHolder = squareroot;
        returnResults();
    }
});

const factorialButton = document.getElementById("factorial");
factorialButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        secondNumber = "";
        functionHolder = factorial;
        returnResults();
    } else {
        if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition || functionHolder == exponent) {
            returnResults();
        }
        firstNumber = parseFloat(display.textContent);
        secondNumber = "";
        functionHolder = factorial;
        returnResults();
    }
});

const plusMinusButton = document.getElementById("plusMinus");
plusMinusButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    if (display.textContent == "0") {
        return;
    } else {
        let result = display.textContent* (-1);
        clearDisplay();
        populateDisplay(result);    
    }
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener('click', event => {
    returnResults();
});

// Clear buttons
const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', event => {
    clearDisplay();
});

const allClearButton = document.getElementById("allClear");
allClearButton.addEventListener('click', event => {
    firstNumber = "";
    secondNumber = "";
    functionHolder = "";
    clearEquation();
    clearDisplay();
});

// Keyboard Support
document.addEventListener('keydown', keyboardSupport);

function keyboardSupport(e) {
    if (e.key == "Enter") { returnResults(); }
    else if (e.key == 1) { populateDisplay(1); }
    else if (e.key == 2) { populateDisplay(2); }
    else if (e.key == 3) { populateDisplay(3); }
    else if (e.key == 4) { populateDisplay(4); }
    else if (e.key == 5) { populateDisplay(5); }
    else if (e.key == 6) { populateDisplay(6); }
    else if (e.key == 7) { populateDisplay(7); }
    else if (e.key == 8) { populateDisplay(8); }
    else if (e.key == 9) { populateDisplay(9); }
    else if (e.key == 0) { populateDisplay(0); }
    else if (e.key == ".") { 
        const display = document.getElementById("displayNumber");
        if (!display.textContent.includes(".")) {
            populateDisplay(".");
        } else { return; }
    }
    else if (e.key == "Backspace") { 
        clearDisplay();
    }
    else if (e.key == "~") { 
        const display = document.getElementById("displayNumber");
        if (display.textContent == "0") {
            return;
        } else {
            let result = display.textContent* (-1);
            clearDisplay();
            populateDisplay(result);    
        }
    }
    else if (e.key == "s") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            secondNumber = "";
            functionHolder = square;
            returnResults();
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            secondNumber = "";
            functionHolder = square;
            returnResults();
        }
    }
    else if (e.key == "r") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            secondNumber = "";
            functionHolder = squareroot;
            returnResults();
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            secondNumber = "";
            functionHolder = squareroot;
            returnResults();
        }
    }
    else if (e.key == "Escape") { 
        firstNumber = "";
        secondNumber = "";
        functionHolder = "";
        clearEquation();
        clearDisplay();
    }
    else if (e.key == "!") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            secondNumber = "";
            functionHolder = factorial;
            returnResults();
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            secondNumber = "";
            functionHolder = factorial;
            returnResults();
        }    
    }
    else if (e.key == "^") { 
        const display = document.getElementById("displayNumber");

        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            functionHolder = exponent;
            populateEquation(firstNumber, "^ ");
            clearDisplay();
        } else if (firstNumber && functionHolder && display.textContent == "0") {
            functionHolder = exponent;
            populateEquation(firstNumber, "^ ");
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            functionHolder = exponent;
            populateEquation(firstNumber, "^ ");
            clearDisplay();
        }    
    }    
    else if (e.key == "+") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            functionHolder = addition;
            populateEquation(firstNumber, " + ");
            clearDisplay();
        } else if (firstNumber && functionHolder && display.textContent == "0") {
            functionHolder = addition;
            populateEquation(firstNumber, " + ");
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = display.textContent;
            functionHolder = addition;
            populateEquation(firstNumber, " + ");
            clearDisplay();
        }    
    } else if (e.key == "-") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            functionHolder = subtraction;
            populateEquation(firstNumber, " - ");
            clearDisplay();
        } else if (firstNumber && functionHolder && display.textContent == "0") {
            functionHolder = subtraction;
            populateEquation(firstNumber, " - ");
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            functionHolder = subtraction;
            populateEquation(firstNumber, " - ");
            clearDisplay();
        }    
    } else if (e.key == "*") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            functionHolder = multiplication;
            populateEquation(firstNumber, " * ");
            clearDisplay();
        } else if (firstNumber && functionHolder && display.textContent == "0") {
            // Failsafe for incorrect function called
            functionHolder = multiplication;
            populateEquation(firstNumber, " * ");
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            functionHolder = multiplication;
            populateEquation(firstNumber, " * ");
            clearDisplay();
        }    
    } else if (e.key == "/") { 
        const display = document.getElementById("displayNumber");
        if (!firstNumber) {
            firstNumber = parseFloat(display.textContent);
            functionHolder = division;
            populateEquation(firstNumber, " / ");
            clearDisplay();
        } else if (firstNumber && functionHolder && display.textContent == "0") {
            functionHolder = division;
            populateEquation(firstNumber, " / ");
        } else {
            if (functionHolder == multiplication || functionHolder == division || functionHolder == subtraction || functionHolder == addition) {
                returnResults();
            }
            firstNumber = parseFloat(display.textContent);
            functionHolder = division;
            populateEquation(firstNumber, " / ");
            clearDisplay();
        }    
    }
};

// Number Buttons

const oneButton = document.getElementById("one");
oneButton.addEventListener('click', event => {
    populateDisplay(1);
});

const twoButton = document.getElementById("two");
twoButton.addEventListener('click', event => {
    populateDisplay(2);
});

const threeButton = document.getElementById("three");
threeButton.addEventListener('click', event => {
    populateDisplay(3);
});

const fourButton = document.getElementById("four");
fourButton.addEventListener('click', event => {
    populateDisplay(4);
});

const fiveButton = document.getElementById("five");
fiveButton.addEventListener('click', event => {
    populateDisplay(5);
});

const sixButton = document.getElementById("six");
sixButton.addEventListener('click', event => {
    populateDisplay(6);
});

const sevenButton = document.getElementById("seven");
sevenButton.addEventListener('click', event => {
    populateDisplay(7);
});

const eightButton = document.getElementById("eight");
eightButton.addEventListener('click', event => {
    populateDisplay(8);
});

const nineButton = document.getElementById("nine");
nineButton.addEventListener('click', event => {
    populateDisplay(9);
});

const zeroButton = document.getElementById("zero");
zeroButton.addEventListener('click', event => { 
    // if display string is empty do nothing, otherwise populate one 0
    const display = document.getElementById("displayNumber");
    if (display.textContent == "0") {
        return;
    } else {
        populateDisplay(0);
    }
});

const doubleZeroButton = document.getElementById("doubleZero");
doubleZeroButton.addEventListener('click', event => {
    // if display string is empty do nothing, otherwise populate two 0's
    const display = document.getElementById("displayNumber");
    if (display.textContent == "0") {
        return;
    } else {
        populateDisplay(0);
        populateDisplay(0);
    }});

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener('click', event => {
    // if string doesn't contain "." populate, else do nothing
    const display = document.getElementById("displayNumber");
    if (!display.textContent.includes(".")) {
        populateDisplay(".");
    } else { return; }
});

// Math Functions 
function addition(num2, num1) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 + num2;
}

function subtraction(num2, num1) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num2, num1) {    
    if (num2 == 0) {
        return "ERROR" // Add Easter Egg
    } else { return num1 / num2; }
}

function square(num1) {
    return num1 * num1;
}

function squareroot(num1) {
    return Math.sqrt(num1);
}

function exponent(num2, num1) {
    return num1 ** num2;
}

function factorial(num1) {
    let result = 1;
    if (num1 == "Infinity") {
        window.alert("You broke the universe");
        return 1;
    } else if (num1 == 0) {
        return result;
    } else if (num1 < 0) {
        num1 *= -1;
        for (i = 1; i <= num1; i++) {
            result *= i;
        }
        result *= -1;
    } else {
        for (i = 1; i <= num1; i++) {
            result *= i;
        }
    }
    return result;
}

// Master Operation
function operate(...args) {
    let operation = args[0];
    let nums = [];

    for (i = 1; i < args.length; i++) {
        nums[i - 1] = args[i];
    }
    return operation(...nums);
}

function returnResults() {
    
    if (functionHolder == multiplication) { symbol = " * "}
    else if (functionHolder == division) { symbol = " / "}
    else if (functionHolder == subtraction) { symbol = " - "}
    else if (functionHolder == addition) { symbol = " + "}
    else if (functionHolder == square) { symbol = "^2"}
    else if (functionHolder == squareroot) { symbol = "√"}
    else if (functionHolder == factorial) { symbol = "!"}
    else if (functionHolder == exponent) { symbol = "^ "}

    const display = document.getElementById("displayNumber");

    if (!functionHolder) {
        firstNumber = parseFloat(display.textContent);
        populateEquation(firstNumber);

        newResult = true;
    } else if (typeof firstNumber !== 'number') {
        // Allows looping as expected on multiple returnResults()
        firstNumber = parseFloat(display.textContent);
        let result = operate(functionHolder, secondNumber, firstNumber);
        // Populate the equation 
        if (functionHolder == square || functionHolder == factorial) {
            populateEquation(firstNumber, symbol);
        } else if (functionHolder == squareroot) {
            populateEquation(symbol, firstNumber);
        } else {
            populateEquation(firstNumber, symbol, secondNumber);
        }
        clearDisplay();
        if (functionHolder == squareroot && firstNumber < 0) {
            display.textContent = "0";
        } else {
            populateDisplay(result);
        }    
        firstNumber = "";
        newResult = true;
    } else {
        secondNumber = parseFloat(firstNumber);
        firstNumber = parseFloat(display.textContent);

        let result = operate(functionHolder, firstNumber, secondNumber);

        // Populate the equation 
        if (functionHolder == square || functionHolder == factorial) {
            populateEquation(firstNumber, symbol);
        } else if (functionHolder == squareroot) {
            populateEquation(symbol, firstNumber);
        } else {
            populateEquation(secondNumber, symbol, firstNumber);            
        }

        clearDisplay();
        if (functionHolder == squareroot && firstNumber < 0) {
            display.textContent = "0";
        } else {
            populateDisplay(result);
        }    
        secondNumber = firstNumber;
        firstNumber = "";
        newResult = true;
    }
}

// Populate and clear display areas
function clearDisplay() {
    const display = document.getElementById("displayNumber");
    display.textContent = "0";
    newResult = true;
}

function populateDisplay(num) {

    num = checkLength(num);

    const display = document.getElementById("displayNumber");
    if (!newResult) {
        drawDisplay();
    } else {
        newResult = false;
        clearDisplay();
        drawDisplay();
    }
    
    function drawDisplay() {
        newResult = false;
        if (display.textContent == "0" && num == ".") {
            display.textContent += num;
        } else if (display.textContent == "0") {
            display.textContent = num;
        } else {
            display.textContent += num;
        }
    }
}

function clearEquation() {
    const equation = document.getElementById("equationDisplay");
    equation.textContent = "";
}

function populateEquation(...args) {
    const equation = document.getElementById("equationDisplay");
    let inputs = args;

    clearEquation();
    for (i = 0; i < args.length; i++) {
        if (inputs[i] == "^2" || inputs[i] == "^ " | inputs[i] == "√") {
            equation.textContent += inputs[i];    
        } else {
            inputs[i] = checkLength(inputs[i]);
            equation.textContent += inputs[i];    
        }
    }
}

function checkLength(num) {
    let numLength = num.toString();
    // Add check for length of (result) string from returnResults() here
    if (num > "99999999") {
        num = num.toExponential(5);
    } else if (numLength.length >= 13) {
        // search for "." to determine how much to round by 
        let position = numLength.indexOf(".");
        let trunc = 11 - position;
        num = num.toFixed(trunc);
    } else { return num; }
    return num;
}

// On-Off Switch
const onOffToggle = document.querySelector("#on-off");
onOffToggle.addEventListener("change", () => {
    if (onOffToggle.checked) {
        equationSpace = document.getElementById("equationDisplay");
        equationSpace.classList.remove("off");
    
        displaySpace = document.getElementById("displayNumber");
        displaySpace.classList.remove("off");
        clearEquation();
        clearDisplay();
    } else {
        equationSpace = document.getElementById("equationDisplay");
        equationSpace.classList.add("off");

        displaySpace = document.getElementById("displayNumber");
        displaySpace.classList.add("off");
        clearEquation();
        clearDisplay();
    }
});