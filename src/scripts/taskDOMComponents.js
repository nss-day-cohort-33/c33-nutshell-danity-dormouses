import { updateTask, getTaskID, getTaskByUserID } from "./api.js";
import {createTaskEditForm, addTaskEditFormToDom} from "./task.js"

// function that defines how a task will appears in the DOM
// added hidden input field to be used to edit the task name and set its value to the name of the task
function makeTaskComponent(task) {
  return `
    <div id="task-container-${task.id}">
    <fieldset>
    <h3 class="task-name" id="task-name-${task.id}">${task.task}</h3>
    <input type="hidden" id="task-id-${task.id}" value="${task.task}">
    <label for="task-date"><strong>"Date to Complete"</strong></label>
    <li style="list-style-type:none" name="task-date">${task.date}</li>
    <label for="task-checkbox"><strong>"Click to Complete"</strong></label>
    <input type="checkbox" class="task-checkbox" id="task-checkbox-${
      task.id
    }" name="task-checkbox">
    </fieldset>
    </div>
    `;
}

// This function is to click a checkbox to mark a task complete in the database and
// refresh the DOM with only incomplete tasks
function markTaskComplete() {
    // Target all the checkboxes
  let completeTask = document.querySelectorAll(".task-checkbox");
// Loop through the checkboxes and add click event listeners to them
  for (let i = 0; i < completeTask.length; i++) {
    completeTask[i].addEventListener("click", () => {
    // Declare variable that holds the value of checkbox id
      let completeTaskId = event.target.id.split("-")[2];
    // declare variable to hold item of user logged in
      let userId = +sessionStorage.getItem("userId")
    // Conditional to check if the chechbox property of checked equals true
      if (event.target.checked === true) {
    // Get the task by Id
        getTaskID(completeTaskId).then(task => {
    // change value of complete property to true
          task.complete = true;
    // Call PUT function and pass in the task ID and the new task with the complete property equal to true
    // Chain a .then onto the PUT function to Wait for the database to be updated
          updateTask(completeTaskId, task).then( () => {
    // Call the GET function to get all tasks which only gets tasks that are complete = false
    // Empty the DOM and += the tasks back into the DOM
            getTaskByUserID(userId)
            .then(tasksArray => {
                document.querySelector(
                    "#task-list"
                    ).innerHTML = ""
                tasksArray.forEach(task => {
                    document.querySelector("#task-list").innerHTML += makeTaskComponent(task)
    // Have to re-call this whole function to add the event listeners back onto the checkboxes
                    markTaskComplete()
                })
          });
        });
      })
    }

  })

}
}
// Defining a function to edit the task name once it is clicked
function editTaskName() {
// get all the task names by class
    let taskName = document.querySelectorAll(".task-name")
    for(let i = 0; i < taskName.length; i++) {
// add click event listener to each task name
        taskName[i].addEventListener("click", () => {
            // console.log(taskName[i])
// define variable that holds value of the task name ID
            let taskToEditId = event.target.id.split("-")[2]
            let userId = +sessionStorage.getItem("userId")
// define variable to hold value of hidden input field by the ID of the task name ID
            let taskNameToEdit = document.getElementById(`task-id-${taskToEditId}`)
// change the Type attribute of the hidden input field to text so it appears when the task name is clicked
// the value of the hidden input field is already set to equal the name of the task
            taskNameToEdit.setAttribute("type", "text")
            console.log(taskName)
            console.log("task name clicked")
            console.log(taskToEditId)

        })
    }
}



export {makeTaskComponent, markTaskComplete, editTaskName}
