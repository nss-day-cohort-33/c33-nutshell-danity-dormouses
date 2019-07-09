import {createNewTaskForm} from "./taskDOM.js"
import { makeTaskComponent, markTaskComplete, editTaskName} from "./taskDOMComponents.js";
import { getTaskByUserID} from "./api.js"

// Define variable to target html container for tasks
let taskPageContainer = document.querySelector("#task-page")
let taskListContainer = document.querySelector("#task-list")

// Declare a function that lays out the html format of the main task page
function createTaskPage() {
    console.log("creste tsk called")
    // For testing we are just adding the task container to the welcome page
    // Eventually tasks will need to be on the dashboard
    let userId = +sessionStorage.getItem("userId")
    let h1TaskPage = document.createElement("h1")
    let addTaskBtn = document.createElement("button")
    addTaskBtn.setAttribute("id", "task-btn" )
    h1TaskPage.textContent = "Tasks To Complete"
    addTaskBtn.textContent ="Add Task"
    taskPageContainer.appendChild(h1TaskPage)
    taskPageContainer.appendChild(addTaskBtn)
    // Fetch call to GET all tasks by the userId of the person logged in
    // Loop through them and add them to the makeTaskComponent html string
    getTaskByUserID(userId)
    .then(tasksArray => {
        tasksArray.forEach(task => {
            document.querySelector("#task-list").innerHTML += makeTaskComponent(task)
        });
    // Add click event listener to Add Task button which brings up New Task Form
        document.querySelector("#task-btn").addEventListener("click", () => {
            console.log("add task button clicked")
            createNewTaskForm()

        })
            markTaskComplete()

            editTaskName()
    })

}




// Define factory function to create new Task object for database
function createNewTaskObj(userTask, completiondate, userID) {
    return {
        task: userTask,
        date: completiondate,
        userId: userID,
        complete: false
    }

}









export{createTaskPage, createNewTaskObj, taskPageContainer, taskListContainer}