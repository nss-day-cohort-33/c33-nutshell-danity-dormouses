import {welcomePageContainer} from "./welcome.js"

// Define variable to target html container for tasks
let taskPageContainer = document.querySelector("#task-page")

// Declare a function that lays out the html format of the main task page
function createTaskPage() {
// For testing we are just adding the task container to the welcome page
// Eventually tasks will need to be on the dashboard
welcomePageContainer.innerHTML = ""
let h1TaskPage = document.createElement("h1")
let taskBtn = document.createElement("button")
taskPageContainer.appendChild(h1TaskPage)
taskPageContainer.appendChild(taskBtn)
taskBtn.setAttribute("id", "task-btn" )
h1TaskPage.textContent = "Tasks To Complete"
taskBtn.textContent ="Add Task"
// add click event listener to the task button that will invoke the function to present the user
// with input fields to enter their new task
taskBtn.addEventListener("click", () => {
    console.log("add task button clicked")
    createTaskForm()
})



}

function createTaskForm() {
    taskPageContainer.innerHTML =
    `
    <h1>Enter New Task</h1>
    <input id="task-name" type="text" placeholder="Enter Task Name">
    <input id="task-completion-date" type="date">

    `
// let taskName = document.createElement("input")
// let taskCompletionDate = document.createElement("input")
// taskPageContainer.appendChild(taskName)
// taskPageContainer.appendChild(taskCompletionDate)

}





export{createTaskPage}