import{createNewTaskObj, taskPageContainer} from "./task.js"
import { getTaskID, addNewTask } from "./api.js";

// Declare function that adds HTML for new task inputs and save button to DOM when Add Task button above is clicked
function createNewTaskForm() {
    taskPageContainer.innerHTML =
    `
    <h1>Enter New Task</h1>
    <input id="task-name" type="text" placeholder="Enter Task Name">
    <input id="task-completion-date" type="date">
    <button id="create-new-task">Save Task</button>

    `
// let taskName = document.createElement("input")
// let taskCompletionDate = document.createElement("input")
// taskPageContainer.appendChild(taskName)
// taskPageContainer.appendChild(taskCompletionDate)
    createNewTask()
}

const createNewTask = function () {
    document.querySelector("#create-new-task").addEventListener("click", () => {
                let taskName = document.querySelector("#task-name").value
                let taskCompletionDate = document.querySelector("#task-completion-date").value
                let newTaskObject = createNewTaskObj(taskName, taskCompletionDate)
                let isThereATask = false
                console.log(newTaskObject)
                getTaskID()
                .then(taskData => {
                    taskData.forEach(task => {
                        if(taskName === task.task) {
                            alert("That task name already exists.")
                            isThereATask = true
                        }
                    })
                        if(isThereATask === false) {
                            addNewTask(newTaskObject)

                        }
                })

            })
}


export{createNewTaskForm}