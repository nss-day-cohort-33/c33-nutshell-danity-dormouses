import {createEvent} from "./events.js"

let welcomePageContainer = document.getElementById("welcome-page")

function createDashBoard() {
welcomePageContainer.innerHTML = `
<h1>GIGGLE KITTY DASHBOARD</h1>
`
createEvent()

}







export { createDashBoard }