import { createNewTaskObj, taskPageContainer } from "./task.js";
import { getTaskID, addNewTask, getTaskByUserID } from "./api.js";
import { makeTaskComponent, markTaskComplete, editTaskName } from "./taskDOMComponents.js";


// Declare function that adds HTML for new task inputs and save button to DOM when Add Task button above is clicked
function createNewTaskForm() {
  taskPageContainer.innerHTML = `

  <h1>Enter New Task</h1>
    <input id="task-name" type="text" placeholder="Enter Task Name">
    <input id="task-completion-date" type="date">
    <button id="create-new-task">Save Task</button>

    `;
  createNewTask();
}

const createNewTask = function() {
// Target the task-list element with click listener.
    document.querySelector("#create-new-task").addEventListener("click", () => {
    let taskName = document.querySelector("#task-name").value;
    let taskCompletionDate = document.querySelector("#task-completion-date")
    .value;
    // use Session Storage to get id of the current user and assign to a variable
    let userId = +sessionStorage.getItem("userId");
    // assign variable to the factory function that creates a new task object
    let newTaskObject = createNewTaskObj(taskName, taskCompletionDate, userId);
    let isThereATask = false;
    // Fetch GET to run through all tasks and check if there is an existing task with the same name
    getTaskByUserID(userId).then(taskData => {
        taskData.forEach(task => {
            if (taskName === task.task) {
                alert("That task name already exists.");
                isThereATask = true;
            }
        });
        if (isThereATask === false) {
            // If task is unique it is added to the database .then GETs the new task Array and and loops through them
            // and adds them to the DOM
            addNewTask(newTaskObject).then(() => {

                getTaskByUserID(userId).then(tasksArray => {
                    document.querySelector(
                        "#task-list"
                        ).innerHTML = ""
                    tasksArray.forEach(task => {
                        document.querySelector(
                            "#task-list"
                            ).innerHTML += makeTaskComponent(task);
                        })
                        document.querySelector("#task-name").value= ""
                        document.querySelector("#task-completion-date").value= ""
                        markTaskComplete();
                        editTaskName()
                    });
                });
            }
        });

    }
  )}


export { createNewTaskForm }
