// Step 1  find the DOM element
// Grab everything from the HTML page
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active")
var showAllButton = document.getElementById("show-all")
var showCompletedButton = document.getElementById("show-completed")

var templateElement = document.getElementById("list-item-template");
var template = templateElement.innerHTML;

// Step 2 Write the behaviour
// Write the fuctionality 
function onAddTaskClicked(event) {
    console.log("onAddTaskClicked function called");
    var taskName = newTaskInput.value; //Copy the contens from the text box
    newTaskInput.value = ""; //, when i click the button, i want to read the content and clear it
   
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

    
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
}

function showAllTasks(){
    var tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++){
        tasks[i].style.display = "block"
    }
}

function showCompletedTasks(){
    var tasks = document.getElementsByClassName("task");
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            // set the display property to "block"
            tasks[i].style.display = "block";
        } else {
            tasks[i].style.display = "none";
        }
    }
}
function showActiveTasks() {
    var tasks = document.getElementsByClassName('task')
    console.log(tasks);
    for (let i = 0; i<tasks.length; i++){
        if (tasks [i].classList.contains("completed")){
            // Get the element you want to hide
            var element = tasks[i]

            // Set the display property to "none"
            tasks[i].style.display = "none";
        } else {
            tasks[i].style.display = "block";

        }
    }
}
//when an Event occurs, the event contains info about the element that was clicked 
// Take the target element, if the target element NOT contain Task - get its parent
function onTodolistClicked(event) {
    var targetElement = event.target;

    while (!targetElement.classList.contains("task")) {
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
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);