export function isProgressBar() {
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

    const offsetCount = setInterval(() => {
        circlePercent.innerHTML = count + '%';
        
        if(circle.style.strokeDashoffset >= circumference) {
            clearInterval(offsetCount);
        } 
        circle.style.strokeDashoffset -= 1;
        circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;

        if (count >= percent) {
            clearInterval(offsetCount)
        } 
        count += 1;
    }, 100)
}; 
setProgress(80);

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
}