// let frm = document.getElementById('form1')

// let sel = frm.elements.select1

// let filterOptions =  Array.from(sel.options).filter(item => {
//   return item.selected;
// })
// .map(item => {
//   return item.value
// });

// console.log(filterOptions);

// let sel = frm.elements.select1;
// Array.from(sel.options).forEach(item => {
//   item.selected = false
// })
// let add = (name) => {
//     var sel = frm.elements.select1
//     var option = document.createElement("option");
//     option.text = name;
//     option.selected = true
//     sel.add(option);
// }
// add('Jazz')
const email = document.getElementById('mail');

email.addEventListener('input', () => {
  if(email.validity.typeMismatch){
    email.setCustomValidity('Error in email')
  }
  else {
    email.setCustomValidity('Good job')
  }
})