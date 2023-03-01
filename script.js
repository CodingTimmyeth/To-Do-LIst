// Variables form HTML File
const todoListCon = document.getElementById('todo-list');
const addBtn = document.getElementById('add');
const inputToDO = document.getElementById('input-todo');
const showError = document.getElementById('show-error')

// This is used to add the To-Do list inside the todoListCon
addBtn.addEventListener('click', function (){
    // CallBack Function
    addTodo()
    // When user clicks the add button clear the input
    inputToDO.value = '';
})

// Functionality for when the user clicks the ADD BTN
function addTodo () {
    // When clicked, I am creating a new DIV
    const div = document.createElement('div')
    // Inside that DIV I am adding HTML for the todo-list container
    div.innerHTML = `
    <div class="flex items-center justify-between">
        ${inputToDO.value} 
        <div id="icons" class="flex items-center">
            <div id="check" class="check">
                <i class="fa-solid fa-check"></i>
            </div>
            <div id="trash" class="trash">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    </div>
     `
    //  Here I am adding the HTML inside the DIV we have created
    todoListCon.appendChild(div)

    // This is to check if the user has typed nothing in the input and pressed the ADD BTN
    const error = 'Please Enter a Value!'

    if(inputToDO.value === ''){
        inputToDO.style.borderColor = 'red'
        div.style.display = 'none'
        showError.innerText = error
    } else {
        inputToDO.style.borderColor = '';
        div.style.display = 'block'
        showError.innerText = '';
    }

    // Variables for the two icons I created inside the template literals, used div instead
    // of document because I am not getting anything from the document instead I need
    // something from the div inside this function
    const checkBtn = div.querySelector('#check')
    const trashBtn = div.querySelector('#trash')

    // Added Event Listeners to both the icons and added styling
    checkBtn.addEventListener('click', () => {
        console.log('check');
        // when user clicks on check icon BTN it adds a styling of strike through
        div.style.textDecoration = 'line-through';
      });
    
      trashBtn.addEventListener('click', () => {
        console.log('trash');
        // when clicked on the trash icon it completely removes that div from the todoListCon
        div.remove();
      });
}
