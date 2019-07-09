import {createDashboard} from "./dashboard.js"



let chatBox = document.getElementById("chat-page")

function createChatBoard () {
    return `
    <fieldset id="top-box"></fieldset>
    <textarea id="bottom-box" maxLength="300" rows="1" cols="50" placeholder="chat with the nutshell community..."></textarea>
    <button id="submit-btn" type="button">send</button>
    `
}

function messageDisplay() {
document.getElementById("submit-btn").addEventListener("click", () => {
    let message = document.getElementById("bottom-box").value
    let messageDisplayPlace = document.getElementById("top-box")
    messageDisplayPlace.textContent = message
})
}



export { createChatBoard, messageDisplay }