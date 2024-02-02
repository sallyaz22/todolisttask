let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add btn disiabled

input.addEventListener('keyup', () =>{
   if(input.value.trim() != 0){
      addBtn.classList.add('active')
   } else {
      addBtn.classList.remove('active')
   }
})

// add new item to List 
addBtn.addEventListener('click', () => {
   if(input.value.trim() != 0){
      let newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
      <div class="item-btn">
      <i class="fa-solid fa-xmark"></i>
      </div> 
      <input type="checkbox" name="" class="check1">
      <p>${input.value}</p>
      `
      tasks.appendChild(newItem);
      input.value = '';
   } else {
      alert('plese enter a task')
   }
})

// add new item to tasks
tasks.addEventListener('click', (e) => {
   if(e.target.classList.contains('check1')
   ){
      e.target.parentElement.parentElement.remove();
   }
})
tasks.addEventListener('click', (e) => {
   if(e.target.classList.contains('fa-xmark')
   ){
      e.target.parentElement.parentElement.classList.
      toggle('completed');
   }
})



