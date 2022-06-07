export function isRange() {
    // =======================
//     Range Input #1
//     Simple Range Slider
// =======================
let range = document.getElementById('range');
let rangeValue = document.getElementById('rangeValue');
let rangeProgress = document.getElementById('rangeProgress');

rangeValue.innerHTML = '0';

    range.oninput = () => {
        rangeValue.style.left = range.value - 2 + '%';
        rangeProgress.style.width = range.value + '%';
        rangeValue.innerHTML = range.value;
    };

// =======================
//     Range Input #2
//     Simple Range Slider
// =======================
const sliderLeft = document.getElementById('sliderLeft');
const sliderRight = document.getElementById('sliderRight');
const sliderRange = document.getElementById('sliderRange');
const valueLeft = document.getElementById('valueLeft');
const valueChangeLeft = document.querySelector('#valueLeft > div');
const valueRight = document.getElementById('valueRight');
const valueChangeRight = document.querySelector('#valueRight > div');

valueLeft.style.left = sliderLeft.value - 4 + '%';
sliderRange.style.left = sliderLeft.value + '%';

valueRight.style.left = sliderRight.value - 4 + '%';

function changeRangeWidth() {
    let pointLeft = parseInt(sliderLeft.min) + parseInt(sliderLeft.value);
    let pointRight = parseInt(sliderRight.min) + parseInt(sliderRight.value);
    let width = parseInt(pointRight) - parseInt(pointLeft);

    sliderRange.style.width = width +'%';
};
changeRangeWidth();

function setValueLeft () {
    sliderLeft.oninput = () => {
        valueChangeLeft.innerHTML = sliderLeft.value;
        valueLeft.style.left = sliderLeft.value - 4 + '%';
        sliderRange.style.left = sliderLeft.value + '%';

        sliderLeft = changeRangeWidth();
    }
};
setValueLeft();

function setValueRight() {
    sliderRight.oninput = () => {
        valueChangeRight.innerHTML = sliderRight.value;
        valueRight.style.left = sliderRight.value - 4 + '%';

        sliderRight = changeRangeWidth();
    }
};
setValueRight();
    
// =======================
//     Range Input #3
//     Simple Range Slider
// =======================
let rangeSlider = document.getElementById('rangeSlider');
let rangePercent = document.getElementById('rangePercent');
rangeSlider.oninput = () => {
    rangePercent.style.width = rangeSlider.value + '%';
};
}