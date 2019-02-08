/*----- cached element references -----*/
const $totalDisplay = $('body header div');
const $plusButton = $('#plus-btn');
const $minusButton = $('#minus-btn');
const $inputField = $('input');

/*----- event listeners -----*/
$plusButton.on('click', addInput)
$minusButton.on('click', subtractInput)
$inputField.on('click', clearInput);

/*----- functions -----*/
function clearInput() {
    $inputField.val('');
}

function addInput() {
    let initValue = parseInt($totalDisplay.text());
    initValue += parseInt($inputField.val());
    $totalDisplay.text(initValue);
    renderColor();
}

function subtractInput() {
    let initValue = parseInt($totalDisplay.text());
    initValue -= parseInt($inputField.val());
    $totalDisplay.text(initValue);
    renderColor();
}

function renderColor() {
    if ($totalDisplay.text() < 0) {
        $totalDisplay.css({color: 'red'});
    } else {
        $totalDisplay.css({color: 'black'});
    }
}