import {createDashboard} from "./dashboard.js"
import {getUserID} from "./api.js"
import { create } from "domain";

//create a button by which the user can publish their message to the public chat board
//create a box that holds the public messages and limits the number viewed.

//the container for chats is ID-ed "chat-page"
// let dataKeyUserName = sessionStorage.getItem("name")
// let dataKeyUserEmail = sessionStorage.getItem("email")


let chatBox = document.getElementById("chat-page")

function createChatBoard () {
return `
    <div style="border-style:solid; border-width:thick; height=50%; width:100%;"></div>
    <textarea id="bottom-box" maxLength="300" rows="1" cols="50" placeholder="chat with the nutshell community..."></textarea>
    <input id="submit-btn" type="submit" value="submit">
    `
}

document.getElementById("submit-btn").addEventListener("click", () => {
    //let userId = 
    let message = document.getElementById("bottom-box").value
    let newMessageObject = createNewMessage(userId, message)

function createNewMessage(userId, message) {
    return {
        userId: `${userId}`,
        message: `${message}`
    }

}

getUserID()
.then( userData => {
    userData.forEach(one => {
        if (userId === one.id) {


export { createChatBoard }