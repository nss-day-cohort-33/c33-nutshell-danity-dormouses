import {createTaskPage} from "./task.js"
import {createArticlesSection, postArticles, createNewArticleForm} from "./articles"
import { renderEventSection } from "./events.js"
import { createChatBoard, messageDisplay, postMessages } from "./chats";

let dashboardPage = document.getElementById("dashboard-page")
let articlesSection = document.getElementById("article-page")
let welcomePageContainer = document.getElementById("welcome-page")



function createDashBoard() {
let x = parseInt(sessionStorage.getItem("userId"))
console.log(x)
welcomePageContainer.innerHTML = ""
let title = document.createElement("h1")
title.innerHTML = "Giggle Kitty Dashboard"
dashboardPage.prepend(title)
createTaskPage()
updateArticleSection(x)
let chatBox = document.getElementById("chat-page")
renderEventSection()
chatBox.innerHTML = createChatBoard()
messageDisplay()
postMessages()
}





function updateArticleSection(x) {
articlesSection.innerHTML = createArticlesSection()
postArticles(x)
createNewArticleForm(x)
}

// createTaskPage()












export {createDashBoard}
