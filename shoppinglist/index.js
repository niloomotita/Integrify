const addItem = ()=>{

    // the input users enter
    const inputItem = document.getElementById('input-item');
    if(inputItem.value ===""){
        return
    }

    // the quantity input users enter
    const inputQuantity = document.getElementById('quantity'); 

    // creating a new div to put the inputs in it adding input and label and span as its childeren and giving them class and attribute
    const newItem = document.createElement('div');
    newItem.classList.add('buying');
    const newInput = newItem.appendChild(document.createElement('input'));
    newInput.setAttribute('name','grocery');
    newInput.setAttribute('type','checkbox');
    newInput.setAttribute('id',inputItem.value);
    newInput.setAttribute('value',inputItem.value);
    newInput.classList.add('buying-input');
    const newLabel = newItem.appendChild(document.createElement('label'));
    newLabel.setAttribute('for',inputItem.value);
    newLabel.innerText = inputItem.value;
    const newQuantity = newItem.appendChild(document.createElement('span'));
    newQuantity.classList.add('number')
    newQuantity.innerText=inputQuantity.value;
    
// adding newinput to dom
    const parentEl = document.getElementById('buy');
    parentEl.insertBefore(newItem, parentEl.firstChild.previousElementSibling);
}

const add = document.getElementById('add');
add.addEventListener('click',(e)=>{
e.preventDefault()
addItem()
removeItem()
copyItem()
document.getElementById('input-item').value = ''
document.getElementById('quantity').value = ''
})

const removeItem = ()=>{

    // getting all checkboxes  in buyinglist
    const removeableItems = Array.from(document.getElementsByClassName('buying-input'));
    console.log(removeableItems)
    removeableItems.forEach((box)=>{
       box.addEventListener('change',()=>{
           //console.log((box.parentElement).parentElement, 'baghali')
           box.parentElement.classList.add('is-hidden');
       })
    })
}

const copyItem = ()=>{
    const removeableItems = Array.from(document.getElementsByClassName('buying-input'));
    removeableItems.forEach((box)=>{
       box.addEventListener('change',()=>{
          const copiedItem =  box.parentElement
          var cln = copiedItem.cloneNode(true);
          cln.classList.remove('is-hidden');
          cln.classList.add('strike-over')
          console.log(cln)
          document.getElementById('archive').appendChild(cln);

       })
    })
}

removeItem()
copyItem()    

