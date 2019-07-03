import {createArticlesSection, postArticles, createNewArticleForm} from "./articles"
import { createChatBoard, messageDisplay } from "./chats";

let dashboardPage = document.getElementById("dashboard-page")
let articlesSection = document.getElementById("article-page")
let welcomePageContainer = document.getElementById("welcome-page")
let physicalArticles = document.getElementById("article-articles")



function createDashBoard() {
welcomePageContainer.innerHTML = ""
let title = document.createElement("h1")
title.innerHTML = "Giggle Kitty Dashboard"
dashboardPage.prepend(title)


updateArticleSection()

let chatBox = document.getElementById("chat-page")

chatBox.innerHTML = createChatBoard()
messageDisplay()
}




function updateArticleSection() {
articlesSection.innerHTML = createArticlesSection()
physicalArticles.innerHTML = postArticles()
createNewArticleForm()
}




export {createDashBoard, updateArticleSection, getTheUniqueUserID}
