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


function getTaskID() {
    return fetch("http://localhost:3000/tasks")
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


export {getUserID, addNewUser, addNewTask, getTaskID}