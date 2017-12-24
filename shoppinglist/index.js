const addItem = ()=>{
    const inputItem = document.getElementById('input-item');
    console.log(inputItem.value)
    const inputQuantity = document.getElementById('quantity'); 
    const newItem = document.createElement('div');
    newItem.classList.add('buying');
    const newInput = newItem.appendChild(document.createElement('input'));
    newInput.setAttribute('name','grocery');
    newInput.setAttribute('type','checkbox');
    newInput.setAttribute('id',inputItem.value);
    newInput.setAttribute('value',inputItem.value);
    const newLabel = newItem.appendChild(document.createElement('label'));
    newLabel.setAttribute('for',inputItem.value);
    newLabel.innerText = inputItem.value;
    const newQuantity = newItem.appendChild(document.createElement('span'));
    newQuantity.classList.add('number')
    newQuantity.innerText=inputQuantity.value;
    const parentEl = document.getElementById('buy');
    parentEl.insertBefore(newItem, parentEl.firstChild.previousElementSibling);
}
const add = document.getElementById('add');
add.addEventListener('click',(e)=>{
e.preventDefault()
addItem()
})
