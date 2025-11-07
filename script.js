const display = getElementById('display');

function appendValue(value) {
    display.value += value;

}

function clerDisplay() {
    display.value = '';

}

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}