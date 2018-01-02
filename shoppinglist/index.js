const addItem = ()=>{

    // the input users enter
    const inputItem = document.getElementById('input-item');
    // stop the function if user enters empty input
    if(inputItem.value.trim() ===""){
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
    const deleteButton = newItem.appendChild(document.createElement('button'));
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa fa-trash-o fa-3x" aria-hidden="true" >';
    newQuantity.classList.add('number');
    newQuantity.innerText=inputQuantity.value;
    
// adding newinput to DOM
    const parentEl = document.getElementById('buy');
    parentEl.insertBefore(newItem, parentEl.firstChild.previousElementSibling);

    setOnChange()
    deleteItem()
}

const add = document.getElementById('add');
add.addEventListener('click',(e)=>{
    e.preventDefault()
    addItem()
    document.getElementById('input-item').value = ''
    document.getElementById('quantity').value = ''
})

const setOnChange = ()=>{
    const movingItems = Array.from(document.getElementsByClassName('buying-input'))
    movingItems.forEach((box)=>{
    box.onchange = ()=>{
        attachRemoveItems(box)
    }
    })
}



const attachRemoveItems = (box)=>{

    // getting all checkboxes  in buyinglist
    //const removeableItems = Array.from(document.getElementsByClassName('buying-input'));
    //removeableItems.forEach((box)=>{

        //box.onchange  = () => {
        box.parentElement.classList.add('is-hidden');

        //coping hidden div to archive
        const copiedItem =  box.parentElement
       // var cln = copiedItem.cloneNode(true);
       copiedItem.classList.remove('is-hidden')
       copiedItem.classList.add('strike-over')
       
       
       // cln.classList.remove('is-hidden');
       // cln.classList.add('strike-over')
        //console.log(box.id)
        const archive =document.getElementById('archive');
            //if(!archive.querySelector(`#${box.id}`)){
            console.log('bla')
            archive.appendChild(copiedItem);
            box.parentElement.removeChild('input')
        //}
        
        deleteItem();
    }
//});
//}
const addToArchive = (element)=>{
    const archive =document.getElementById('archive');
    archive.appendChild(element);
}

// delete the item onclicking the bin icon
const deleteItem = ()=>{ 
    const deleting = Array.from(document.getElementsByClassName('delete'))
    deleting.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            item.parentElement.parentElement.removeChild(item.parentElement)
        })
    })

}
 // make the archived item collapsible
const showArchive = ()=>{
    const boughtItems = document.querySelector('#archive');
    const showBtn = document.querySelector('#show-btn');
    const showHideBtn = document.querySelector('#show-hide-btn')
    showBtn.addEventListener('click',()=>{
        if(boughtItems.style.display === 'none'){
            showHideBtn.innerHTML='<i class="fa fa-minus" aria-hidden="true"></i>';
            boughtItems.style.display = 'block';
        }else {
            boughtItems.style.display = 'none';
            showHideBtn.innerHTML='<i class="fa fa-plus" aria-hidden="true"></i>';
        }
    })
}

  

const init = () => {
    setOnChange()
    deleteItem();
    showArchive();
}



// all starts here
init()