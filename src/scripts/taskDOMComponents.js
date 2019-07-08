import { updateTask, getTaskID, getTaskByUserID } from "./api.js";


function makeTaskComponent(task) {
  return `
    <div id="task-container-${task.id}">
    <fieldset>
    <h3 class="task-name" id="task-name-${task.id}">${task.task}</h3>
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
    let taskName = document.querySelectorAll(".task-name")
    for(let i = 0; i < taskName.length; i++) {
        taskName[i].addEventListener("click", () => {
            let taskToEditId = event.target.id.split("-")[2]
            let userId = +sessionStorage.getItem("userId")

            console.log("task name clicked")
            console.log(taskToEditId)
        })
    }
}

export {makeTaskComponent, markTaskComplete, editTaskName}
