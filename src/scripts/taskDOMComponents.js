
// let taskPageContainer = document.querySelector("#task-page")

const makeTaskComponent = function(task) {
    return `
    <div>
    <h3>${task.task}</h3>
    <li>${task.date}</li>
    <input type="checkbox" id="task-checkbox" name="task-name">
    </div>
    `


    // let div = document.createElement("div")
    // let taskName = document.createElement("h3")
    // let taskDate = document.createElement("li")
    // let editBtn = document.createElement("button")
    // let checkBox = document.createElement("input")
    // div.appendChild(taskName)
    // div.appendChild(taskDate)
    // div.appendChild(checkBox)
    // div.appendChild(editBtn)
    // editBtn.textContent = "Edit Task"
    // editBtn.setAttribute("id", `edit-btn-${task.id}`)
    // div.setAttribute("id", `task-${task.id}`)
    // checkBox.setAttribute("id", `task-check`)
    // checkBox.setAttribute("class")
}

export{makeTaskComponent}