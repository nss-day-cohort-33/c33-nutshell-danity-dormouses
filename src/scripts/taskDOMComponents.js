// import {taskListContainer} from "./task.js"


function makeTaskComponent(task) {
    return `
    <div id="task-container">
    <h3>${task.task}</h3>
    <li>${task.date}</li>
    <input type="checkbox" id="task-checkbox" name="task-name">
    </div>
    `
}



export{makeTaskComponent}