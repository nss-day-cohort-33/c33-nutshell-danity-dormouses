import {createDashboard} from "./dashboard.js"
//import {getUserID} from "./api.js"

//create a button by which the user can publish their message to the public chat board
//create a box that holds the public messages and limits the number viewed.

//the container for chats is ID-ed "chat-page"
// let dataKeyUserName = sessionStorage.getItem("name")
// let dataKeyUserEmail = sessionStorage.getItem("email")


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

// function createNewMessage(userId, message) {
//     return {
//         userId: `${userId}`,
//         message: `${message}`
//     }

// }

// getUserID()
// .then( userData => {
//     userData.forEach(one => {
//         if (userId === one.id) {
//         }})})


// function addNewChat(textInput) {
//     return fetch(""
// }

export { createChatBoard, messageDisplay }