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
//     Range Input #3
//     Simple Range Slider
// =======================
let rangeSlider = document.getElementById('rangeSlider');
let rangePercent = document.getElementById('rangePercent');
rangeSlider.oninput = () => {
    rangePercent.style.width = rangeSlider.value + '%';
};