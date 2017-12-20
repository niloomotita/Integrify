const deletItems = document.getElementsByClassName("delete");
const deleteArray = Array.from(deletItems);
const parentEl = Array.from(document.getElementsByClassName("check"))
deleteArray.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        e.preventDefault(e);
        box.parentElement.removeChild(box.previousElementSibling) 
    })
})
function addInput(){
const newInput = document.createElement("span");
const labelVal =newInput.appendChild(document.createElement("label"))
console.log(labelVal)
const inputValue =document.querySelector('.extraInput')
labelVal.innerText = inputValue.value
document.body.insertBefore(newInput,document.body.firstChild)
console.log(inputValue.value)
}
const add = document.querySelector('#add');
add.addEventListener("click",(e)=>{
e.preventDefault(e);
addInput();



 

})
//console.log(add)
