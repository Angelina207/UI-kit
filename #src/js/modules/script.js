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
