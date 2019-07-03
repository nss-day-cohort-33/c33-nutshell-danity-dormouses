import {createTaskPage} from "./task.js"

let welcomePageContainer = document.getElementById("welcome-page")

function createDashBoard() {
welcomePageContainer.innerHTML = `
<h1>GIGGLE KITTY DASHBOARD</h1>

`
createTaskPage()

}







export {createDashBoard}