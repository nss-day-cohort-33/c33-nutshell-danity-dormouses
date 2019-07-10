import {createDashboard} from "./dashboard.js"
import { create } from "domain";
import { addNewMessage, getMessages, editMessage } from "./api.js"


let chatBox = document.getElementById("chat-page")

function createChatBoard () {
    return `
    <input id="bottom-box" type="text" placeholder="chat with everyone..."></input>
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
        newMessageDiv.innerHTML += `${x} : ${message}`
        chatArea.appendChild(newMessageDiv)
        let createNewMessageObject = createNewMessage(y, message)
        addNewMessage(createNewMessageObject)
    })
}

function postMessages() {
    chatArea.innerHTML = `<h2>Chat Board</h2>`
    getMessages()
    .then( messages => {
        messages.forEach(message => {
            chatArea.appendChild(displayAllMessagesComponent(message))
        })
})
}

function displayAllMessagesComponent(messages) {
    let div = document.createElement("div")
    let editBtn = document.createElement("button")
    let div2 = document.createElement("div")
    div2.setAttribute("id", `editFormContainer-${messages.id}`)
    editBtn.textContent = "edit"
    editBtn.setAttribute("type", "button")
    div.innerHTML = `${messages.userName} : ${messages.message}`
    let x = sessionStorage.getItem("userName")
    let messageId = messages.id
    if (messages.userName === x) {
        div.appendChild(editBtn)
        div.appendChild(div2)
    }
    editBtn.addEventListener("click", () => {
    let editForm = createEditFormComponent(messages)
    addEditFormToDOM(div2.id, editForm, messageId)
    })
    return div
}

function createEditFormComponent(message) {
    return `
    <input type="hidden" id="message-id" value=${message.id}>
    <input id="editLine" type="text" placeholder="${message.message}"></input>
    <button id="save-message-btn-${message.id}">save</button>
    `
}

function addEditFormToDOM(divElementId, editForm, messageId) {
    document.querySelector(`#${divElementId}`).innerHTML = editForm
    document.querySelector(`#save-message-btn-${messageId}`).addEventListener("click", () => {
    let message = document.querySelector("#editLine").value
    let y = sessionStorage.getItem("userId")
    let messageIdNum = document.querySelector("#message-id").value
    let updatedMessage = createNewMessage(y, message)
    updatedMessage.id = messageIdNum
    editMessage(updatedMessage)
    .then( () => {
        postMessages()
    })
    })
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

export { createChatBoard, messageDisplay, postMessages, displayAllMessagesComponent, createNewMessage}