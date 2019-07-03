import {createNewTaskForm} from "./taskDOM.js"
import { makeTaskComponent } from "./taskDOMComponents.js";
import { getTaskByUserID} from "./api.js"

// Define variable to target html container for tasks
let taskPageContainer = document.querySelector("#task-page")

// Declare a function that lays out the html format of the main task page
function createTaskPage() {
    console.log("creste tsk called")
    // For testing we are just adding the task container to the welcome page
    // Eventually tasks will need to be on the dashboard
    // welcomePageContainer.innerHTML = ""
    let userId = sessionStorage.getItem("id")
    let h1TaskPage = document.createElement("h1")
    let addTaskBtn = document.createElement("button")
    let div = document.createElement("div")
    addTaskBtn.setAttribute("id", "task-btn" )
    h1TaskPage.textContent = "Tasks To Complete"
    addTaskBtn.textContent ="Add Task"
    div.appendChild(addTaskBtn)
    taskPageContainer.appendChild(div)
    taskPageContainer.appendChild(h1TaskPage)
    // taskPageContainer.appendChild(addTaskBtn)
    // add click event listener to the task button that will invoke the function to present the user
    // with input fields to enter their new task

    getTaskByUserID(userId)
    .then(tasksArray => {
        tasksArray.forEach(task => {
            document.querySelector("#task-page").innerHTML += makeTaskComponent(task)
        });
        document.querySelector("#task-btn").addEventListener("click", () => {
            console.log("add task button clicked")
            createNewTaskForm()

        })
    })

}



// Define factory function to create new Task object for database
function createNewTaskObj(userTask, completiondate, userID) {
    return {
        task: userTask,
        date: completiondate,
        userId: userID
    }

}









export{createTaskPage, createNewTaskObj, taskPageContainer}