// use strict

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