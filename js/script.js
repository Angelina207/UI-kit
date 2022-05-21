// ============================
//          Choices
// ============================
const element = document.querySelector('.select-option');
const choices = new Choices(element, {
  searchEnabled: false,
});
const elemSelect = document.querySelector('.select-choose');
const choicesSelect = new Choices(elemSelect, {
  searchEnabled: false,
});

// ============================
//         FullCalendar
// ============================
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });

// ============================
//          Tabs
// ============================
document.querySelector('.tab-wrapp').addEventListener('click', showTabBody);
// все вкладки с содержимым    
const tabBody = document.getElementsByClassName('tab-content');

function showTabBody(event) {
    if (event.target.className === 'tab-btn') {
        // вкладка, которая будет отображена
       const tabAttr = event.target.dataset.tab;

       for(let i = 0; i < tabBody.length; i++) {
           if (tabAttr == i) {
            tabBody[i].style.display='block';
           } else {
            tabBody[i].style.display='none';
           }
       }
    }
};

document.querySelector('.tab-wrapp').addEventListener('click', ()=> {
    const btnList = document.querySelectorAll('.tab-btn');
    
    if(event.target.className === 'tab-btn') {
        const tabAttr = event.target.dataset.tab;
    for( let i = 0; i < btnList.length; i++) {
        if(tabAttr == i) {
            btnList[i].classList.add('tab-current');
        } else {
            btnList[i].classList.remove('tab-current');
        }
        }
    }
});
// ============================
//     Linear Progress Bar
// ============================
let progressPercent = document.querySelector('.progress-percent');
let numProgress = document.getElementById('numProgress');
let progress = 0;

const moveProgress = setInterval(() => {
    progressPercent.style.width = progress + '%';
    numProgress.innerHTML = progress + '% uploaded';
    if(progress >= 69) {
        clearInterval(moveProgress)
    }
    progress += 1;
}, 100);

// ============================
//     Circle Progress Bar
// ============================

const circle = document.querySelector('.circle-progress');
const circleRadius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * circleRadius;
const circlePercent = document.querySelector('.circle-percent');
let count = 0;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;

    const offsetCount = setInterval(() => {
        circle.style.strokeDashoffset = count + circumference;
        circlePercent.innerHTML = count + '%';
        if (count >= percent) {
            clearInterval(offsetCount)
        } 
        count += 1;
    }, 100)
}; 
setProgress(69);

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