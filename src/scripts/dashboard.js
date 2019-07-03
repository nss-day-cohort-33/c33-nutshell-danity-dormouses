import {createArticlesSection, postArticles, createNewArticleForm} from "./articles"

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

}




function updateArticleSection() {
articlesSection.innerHTML = createArticlesSection()
physicalArticles.innerHTML = postArticles()
createNewArticleForm()
}




export {createDashBoard, updateArticleSection, getTheUniqueUserID}