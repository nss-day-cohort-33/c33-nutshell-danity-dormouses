import {createArticlesSection, postArticles, createNewArticleForm} from "./articles"
import { createChatBoard, messageDisplay } from "./chats";

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

updateArticleSection(x)

let chatBox = document.getElementById("chat-page")
chatBox.innerHTML = createChatBoard()
messageDisplay()
}




function updateArticleSection(x) {
articlesSection.innerHTML = createArticlesSection()
postArticles(x)
createNewArticleForm(x)
}










export {createDashBoard}
