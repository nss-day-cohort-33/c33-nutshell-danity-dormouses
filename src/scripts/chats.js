import {createDashboard} from "./dashboard.js"
import { create } from "domain";
import { addNewMessage, getMessages } from "./api.js"


let chatBox = document.getElementById("chat-page")

function createChatBoard () {
    return `
    <textarea id="bottom-box" maxLength="300" rows="1" cols="50" placeholder="chat with the nutshell community..."></textarea>
    <button id="submit-btn" type="button">send</button>
    `
}

let chatArea = document.getElementById("top-box")

function messageDisplay() {
    document.getElementById("submit-btn").addEventListener("click", () => {
        let x = sessionStorage.getItem("userName")
        let y = sessionStorage.getItem("UserID")
        let message = document.getElementById("bottom-box").value
        let newMessageDiv = document.createElement("div")
        newMessageDiv.innerHTML += `${x} : "${message}"`
        chatArea.appendChild(newMessageDiv)
        let createNewMessageObject = createNewMessage(y, message)
        addNewMessage(createNewMessageObject)
    })
}


function postMessages() {
    getMessages()
    .then( messages => {
        messages.forEach(message => {
            chatArea.appendChild(displayAllMessagesComponent(message))
        })
})
}

function displayAllMessagesComponent(messages) {
    let div = document.createElement("div")
    div.innerHTML = `${messages.userName} : ${messages.message}`
    return div
}


function createNewMessage(uniqueUserId, userMessage) {
    let name = sessionStorage.getItem("userName")
    return {
        userId: parseInt(uniqueUserId),
        message: userMessage,
        userName: name
    }
}
//create an edit button that shows up only IFF the user matches the id for the saved message.

export { createChatBoard, messageDisplay, postMessages }