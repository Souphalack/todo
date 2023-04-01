// Step 1  find the element
// Grab everything from the HTML page
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML;

// Step 2 Write the behaviour
// Write the fuctionality 
function onAddTaskClicked(event){
    var taskName = newTaskInput.value; //Copy the contens from the text box
    newTaskInput.value = ""; //, when i click the button, i want to read the content and clear it
   
    var taskHTML = template.replace("<!--TASK_NAME -->");
    
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}
//when an Event occurs, the event contains info about the element that was clicked 
// Take the target element, if the target element NOT contain Task - get its parent
function onTodoListContainerClicked(event){
    var targetElement = event.target;
    while (!targetElement.classlist.contains("task")) {
        targetElement = targetElement.parentElement;
    }

    var checkbox = targetElement.querySelector(".checkbox"); 

    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}

// Step 3 link to event handler 
//Link the Event to the Functionality 
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);