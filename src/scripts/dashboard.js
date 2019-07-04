import {renderEventSection} from "./events.js"
import { createChatBoard, messageDisplay } from "./chats";


let welcomePageContainer = document.getElementById("welcome-page")
let chatBox = document.getElementById("chat-page")

function createDashBoard() {
welcomePageContainer.innerHTML = `
<h1>GIGGLE KITTY DASHBOARD</h1>
`
renderEventSection()

chatBox.innerHTML = createChatBoard()
messageDisplay()
}








export {createDashBoard}
