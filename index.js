let displayValue = ""

function appendToDisplay(value) {
    displayValue += value
    document.getElementById("display").value = displayValue

}

function clearDisplay() {
    displayValue = ""
    document.getElementById("display").value = ""
}

function calculateResult () {
    try {
        displayValue = eval(displayValue)
        document.getElementById("display").value = displayValue
    }

    catch (error) {
        document.getElementById("display").value = "Error"
    }
}

function roundDown() {
    try {
        displayValue = Math.floor(eval(displayValue))
        document.getElementById("display").value =displayValue
    }

    catch (error) {
        document.getElementById("display").value = "Error"
    }
}

function roundUp() {
    try {
        displayValue = Math.ceil(eval(displayValue))
        document.getElementById("display").value = displayValue
    }

    catch (error) {
        document.getElementById("display").value = "Error"
    }
}