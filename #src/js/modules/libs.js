export function libsFunction() {
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
//       Air Datepicker
// ============================
// import AirDatepicker from 'air-datepicker'
// import 'air-datepicker/air-datepicker.css'

// new AirDatepicker('#airdatepicker');
}