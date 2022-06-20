import { Parallax } from "swiper";

export function isRange() {

// =======================
//     Range Input #1
// =======================
let range = document.getElementById('range');
let rangeValue = document.getElementById('rangeValue');
let rangeProgress = document.getElementById('rangeProgress');

rangeValue.innerHTML = range.value;
rangeValue.style.left = range.value - 2 + '%';
rangeProgress.style.width = range.value + '%';

range.oninput = () => {
    rangeValue.innerHTML = range.value;
    rangeValue.style.left = range.value - 2 + '%';
    rangeProgress.style.width = range.value + '%';
}

// =======================
//     Range Input #2
// =======================
let rangeSlider = document.getElementById('rangeSlider');
let rangePercent = document.getElementById('rangePercent');

rangePercent.style.width = rangeSlider.value + '%';

rangeSlider.oninput = () => {
    rangePercent.style.width = rangeSlider.value + '%';
}

// =======================
//     Range Input #3
// =======================
let sliderLeft = document.getElementById('sliderLeft');
let sliderRight = document.getElementById('sliderRight');
let sliderRange = document.getElementById('sliderRange');
let valueLeft = document.getElementById('valueLeft');
let valueRight = document.getElementById('valueRight');

let valueChangeLeft = document.querySelector('#valueLeft > div');
let valueChangeRight = document.querySelector('#valueRight > div');

valueLeft.style.left = sliderLeft.value - 5 + '%';
valueRight.style.left = sliderRight.value - 5 + '%';
sliderRange.style.left = sliderLeft.value + '%';

changeRangeWidth();


    sliderLeft.oninput = () => {
        sliderLeft.value = Math.min(parseInt(sliderLeft.value), parseInt(sliderRight.value) - 10);
        valueChangeLeft.innerHTML = sliderLeft.value;
        valueLeft.style.left = sliderLeft.value - 5 + '%';
        sliderRange.style.left = sliderLeft.value + '%';

        changeRangeWidth()
    }
    sliderRight.oninput = () => {
        sliderRight.value = Math.max(parseInt(sliderRight.value), parseInt(sliderLeft.value) + 10);
        valueChangeRight.innerHTML = sliderRight.value;
        valueRight.style.left = sliderRight.value - 5 + '%';

        changeRangeWidth()
    }

    function changeRangeWidth() {
        let pointLeft = parseInt(sliderLeft.min) + parseInt(sliderLeft.value);
        let pointRight = parseInt(sliderRight.min) + parseInt(sliderRight.value);
        let width = parseInt(pointRight) - parseInt(pointLeft);
    
        sliderRange.style.width = width + '%';
        }

// =======================
//     Range Input #4
// =======================
let rangeLeft = document.getElementById('rangeLeft');
let rangeRight = document.getElementById('rangeRight');
let rangeWidth = document.querySelector('.range-progress');

let leftMin = parseInt(rangeLeft.min);
let rightMin = parseInt(rangeLeft.min);
let rangeLeftVal = parseInt(rangeLeft.value);
let rangeRightVal = parseInt(rangeRight.value);

setValueRange();

rangeLeft.oninput = () => {
    rangeLeftVal = parseInt(rangeLeft.value);
    rangeRightVal = parseInt(rangeRight.value);

    if  (rangeLeftVal >= rangeRightVal - 8) {
         rangeRight.value = rangeRightVal + 1;
         rangeWidth.style.left = rangeLeft.value + '%';
        };

        setValueRange();
    };

rangeRight.oninput = () => {
    rangeLeftVal = parseInt(rangeLeft.value);
    rangeRightVal = parseInt(rangeRight.value);

    if (rangeRightVal <= rangeLeftVal + 8) {
        rangeLeft.value = rangeLeftVal - 1;
        };

        setValueRange();
    };

    function setValueRange() {
        let width = (leftMin - rangeLeftVal) + (rightMin + rangeRightVal);

        rangeWidth.style.width = width + '%';
        rangeWidth.style.left = rangeLeft.value + '%';
    }         
}


