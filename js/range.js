// use strict

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
    const valueLeft = document.getElementById('valueLeft');
    const valueRight = document.getElementById('valueRight');
    const sliderRange = document.getElementById('sliderRange');

    valueLeft.innerHTML = sliderLeft.value;
    valueLeft.style.left = sliderLeft.value + '%';
    sliderRange.style.left = sliderLeft.value + '%';

    valueRight.innerHTML = sliderRight.value;
    valueRight.style.left = sliderRight.value + '%';

    function changeRangeWidth() {
        let pointLeft = parseInt(sliderLeft.min) + parseInt(sliderLeft.value);
        let pointRight = parseInt(sliderRight.min) + parseInt(sliderRight.value);
        let width = parseInt(pointRight) - parseInt(pointLeft);

        sliderRange.style.width = width +'%';
    };
    changeRangeWidth();

    function setValueLeft () {
        sliderLeft.oninput = () => {
            valueLeft.innerHTML = sliderLeft.value;
            valueLeft.style.left = sliderLeft.value + '%';
            sliderRange.style.left = sliderLeft.value + '%';
            sliderRange = changeRangeWidth();
        }
    };
    setValueLeft();

    function setValueRight() {
        sliderRight.oninput = () => {
            valueRight.innerHTML = sliderRight.value;
            valueRight.style.left = sliderRight.value + '%';
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