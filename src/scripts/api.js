// import {markTaskComplete} from "./taskDOMComponents.js"

function getUserID() {
    return fetch("http://localhost:3000/users")
    .then ( userData => userData.json())
}

function addNewUser(newUser) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })
.then(results => results.json())
}


function getTaskID(id) {
    return fetch(`http://localhost:3000/tasks/${id}`)
    .then ( taskData => taskData.json())
}

function addNewTask(newTask) {
    return fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newTask)
    })
.then(results => results.json())
}

function getTaskByUserID(userId) {
    return fetch(`http://localhost:3000/tasks?userId=${userId}&complete=false`)
    .then ( taskData => taskData.json(),
    )
}

// function getIncompleteTasks(userId) {
//     return fetch(`http://localhost:3000/tasks?userId=${userId}&complete=false`)
//     .then ( taskData => taskData.json(),
//     )
// }


function deleteTaskFromDatabase(id) {
    return fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
}

function updateTask(id, updatedTask) {
    return fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedTask)
    })
    .then(completedTask => completedTask.json())
  }

export {getUserID, addNewUser, addNewTask, getTaskID, getTaskByUserID, deleteTaskFromDatabase, updateTask}