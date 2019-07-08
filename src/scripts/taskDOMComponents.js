import { updateTask, getTaskID, getTaskByUserID } from "./api.js";
// import { createNewTaskObj } from "./task.js";

function makeTaskComponent(task) {
  return `
    <div id="task-container-${task.id}">
    <fieldset>
    <h3 id="task-name-${task.id}">${task.task}</h3>
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

function markTaskComplete() {
  let completeTask = document.querySelectorAll(".task-checkbox");

  for (let i = 0; i < completeTask.length; i++) {
    completeTask[i].addEventListener("click", () => {
      let completeTaskId = event.target.id.split("-")[2];
      let userId = +sessionStorage.getItem("userId")
      if (event.target.checked === true) {
        getTaskID(completeTaskId).then(task => {
          task.complete = true;
          updateTask(completeTaskId, task).then( () => {
            getTaskByUserID(userId)
            .then(tasksArray => {
                document.querySelector(
                    "#task-list"
                    ).innerHTML = ""
                tasksArray.forEach(task => {
                    document.querySelector("#task-list").innerHTML += makeTaskComponent(task)
                    markTaskComplete()
                })
          });
        });
      })
    }

  })

}
}

export {makeTaskComponent, markTaskComplete}
