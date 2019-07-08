import { createChatBoard, messageDisplay, postMessages } from "./chats";

let dashboardPage = document.getElementById("dashboard-page")
let welcomePageContainer = document.getElementById("welcome-page")

function createDashBoard() {
    let x = parseInt(sessionStorage.getItem("UserID"))
    welcomePageContainer.innerHTML = ""
    let title = document.createElement("h1")
    title.innerHTML = "Giggle Kitty Dashboard"
    dashboardPage.prepend(title)
    let chatBox = document.getElementById("chat-page")
    //let displayName = sessionStorage.getitem("")
    chatBox.innerHTML = createChatBoard()
    messageDisplay()
    postMessages()
}






export {createDashBoard}