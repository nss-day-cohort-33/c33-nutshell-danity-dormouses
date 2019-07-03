import {welcomePageContainer} from "./welcome.js"
import {createNewTaskForm} from "./taskDOM.js"


// Define variable to target html container for tasks
let taskPageContainer = document.querySelector("#task-page")

// Declare a function that lays out the html format of the main task page
function createTaskPage() {
// For testing we are just adding the task container to the welcome page
// Eventually tasks will need to be on the dashboard
welcomePageContainer.innerHTML = ""
let h1TaskPage = document.createElement("h1")
let addTaskBtn = document.createElement("button")
taskPageContainer.appendChild(h1TaskPage)
taskPageContainer.appendChild(addTaskBtn)
addTaskBtn.setAttribute("id", "task-btn" )
h1TaskPage.textContent = "Tasks To Complete"
addTaskBtn.textContent ="Add Task"
// add click event listener to the task button that will invoke the function to present the user
// with input fields to enter their new task
addTaskBtn.addEventListener("click", () => {
    console.log("add task button clicked")
    createNewTaskForm()
})



}



// Define factory function to create new Task object for database
function createNewTaskObj(userTask, completiondate) {
    return {
        task: userTask,
        date: completiondate
    }

}









export{createTaskPage, createNewTaskObj, taskPageContainer}