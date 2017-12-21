const deletItems = document.getElementsByClassName("delete");
const deleteArray = Array.from(deletItems);
const parentEl = Array.from(document.getElementsByClassName("check"));
deleteArray.forEach(box => {
  box.addEventListener("click", e => {
    e.preventDefault(e);
    box.parentElement.removeChild(box.previousElementSibling);
  });
});
function addInput() {
  const newInput = document.createElement("span");
  const inputValue = document.querySelector(".extraInput");
  if (inputValue.value === "") {
    return;
  }
  const checkInput = newInput.appendChild(document.createElement("input"));
  const labelVal = newInput.appendChild(document.createElement("label"));
  const newBut = newInput.appendChild(document.createElement("button"));
  const parentElement = document.querySelector(".exp");
  newBut.innerText = "X";
  newBut.classList.add("delete");
  newBut.addEventListener("click", e => {
    e.preventDefault();
    parentElement.removeChild(newInput);
  });
  labelVal.setAttribute("for", inputValue.value);
  labelVal.innerText = inputValue.value;
  newInput.classList.add("check");
  checkInput.setAttribute("name", "check-answer1");
  checkInput.setAttribute("type", "checkbox");
  checkInput.setAttribute("id", inputValue.value);

  const sis = document.querySelector("#sister");
  parentElement.insertBefore(newInput, sis.nextSibling);
}
const add = document.querySelector("#add");
add.addEventListener("click", e => {
  e.preventDefault(e);
  addInput();
 document.querySelector(".extraInput").value = '';
});

const emailValidation = ()=>{
const firstEmail = document.querySelector('#firstemail');
const secondEmail = document.querySelector('#secondemail');
if(firstEmail.value !== secondEmail.value){
  secondEmail.classList.add('invalid-email');
}
}
const secondEmail = document.querySelector('#secondemail');
secondEmail.addEventListener('blur',()=>{
  emailValidation()
})