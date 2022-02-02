const input = document.querySelector('#text-field')
const btn = document.querySelector('#submit-button')
const rst = document.querySelector('#reset-button')
const unList = document.querySelector('#todo-list')

btn.addEventListener('click', createList)
rst.addEventListener('click', resetList)
unList.addEventListener('click', removeTask)

function createList(){
  let list = document.createElement('li')
  let text = input.value 
  list.textContent = text
  if (input.value !== ''){
    unList.appendChild(list)
    input.value = ''
    input.focus();
  }
}

function resetList(){
  unList.innerHTML = ''
  input.value = ''
  input.focus()
}

function removeTask(evt){
  evt.target.remove()
}

