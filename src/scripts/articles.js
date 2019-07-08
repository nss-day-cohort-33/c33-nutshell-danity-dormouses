import {getArticles, addNewArticle, deleteArticle, updateArticle} from "./api.js"



let articlesSection = document.getElementById("article-page")
// let userIdUnique = sessionStorage.getItem("UserID")


let physicalArticles = document.getElementById("article-articles")


function createArticlesSection() {

    return  `
    <h2>Article Section</h2>
    <button id="create-new-article">Create New Article</button>
    <h3>My Articles</h3>
    `
}


function createNewArticleForm(userId) {

    document.getElementById("create-new-article").addEventListener("click", () => {

        articlesSection.innerHTML = `
        <h1>Create A New Article</h1>
        <input id="article-title" type="text" placeholder="Article Title">
        <input id="article-synopsis" type="text" placeholder="Article Synopsis">
        <input id="article-url" type="text" placeholder="Article Url">
        <button id="save-article-btn">Save Article</button>
        `
        saveTheArticle(userId)
    })

}


function saveTheArticle(userId){
    document.getElementById("save-article-btn").addEventListener("click", () => {
        console.log("you clicked")

    let articleTitle = document.getElementById("article-title").value
    let articleSynopsis = document.getElementById("article-synopsis").value
    let articleUrl = document.getElementById("article-url").value
    let thisUserId = userId
    console.log(thisUserId)
    let newArticleObject = createNewArticle(parseInt(thisUserId), articleTitle,articleSynopsis,articleUrl)

    addNewArticle(newArticleObject)
    .then( () => {
        postArticles(thisUserId)
        articlesSection.innerHTML = createArticlesSection()
        createNewArticleForm(thisUserId)
    })
 })
}


function postArticles(userId) {
    physicalArticles.innerHTML = ""
    getArticles(userId)
    .then (articleData => {
        articleData.forEach(article => {
            physicalArticles.appendChild(createArticlesComponent(article))
        })
  })
}

function createArticlesComponent(articles) {
    let elem = document.createElement("div")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let div = document.createElement("div")
    let editBtn = document.createElement("button")
    let deleteBtn = document.createElement("button")
    elem.appendChild(li1)
    elem.appendChild(li2)
    elem.appendChild(li3)
    elem.appendChild(div)
    elem.appendChild(editBtn)
    elem.appendChild(deleteBtn)

    let userIdUnique = parseInt(sessionStorage.getItem("UserID"))
    console.log(userIdUnique)

    editBtn.textContent = "Edit"
    deleteBtn.textContent = "Delete"

    div.setAttribute("id", `editFormContainer-${articles.id}`)
    li1.innerHTML = `Title: ${articles.title}`
    li2.innerHTML = `Synopsis: ${articles.synopsis}`
    li3.innerHTML = `<a href=${articles.url}>Link to Article</a>`

    deleteBtn.addEventListener("click", () => {
       deleteArticle(articles.id)
       .then (data => {
           postArticles(userIdUnique)
       })
    })

    editBtn.addEventListener("click", () => {
        let editForm = createEditFormComponent(articles)
        addEditFormToDom(div.id, editForm, userIdUnique)

    })

    return elem
}


function createEditFormComponent(article) {
    return `
    <input type="hidden" id="article-userId" value=${article.userId}>
    <input type="hidden" id="article-id" value=${article.id}>
    <input id="article-title" type="text" placeholder="Article Title" value="${article.title}">
    <input id="article-synopsis" type="text" placeholder="Article Synopsis" value="${article.synopsis}">
    <input id="article-url" type="text" placeholder="Article Url" value="${article.url}">
    <button id="save-article-btn">Save Article</button>
    `
}


function addEditFormToDom(editContainer, editForm, userID) {
    document.querySelector(`#${editContainer}`).innerHTML = editForm
    document.querySelector("#save-article-btn").addEventListener("click", () => {
        let title = document.querySelector("#article-title").value
        let synopsis = document.querySelector("#article-synopsis").value
        let url = document.querySelector("#article-url").value
        let userId = document.querySelector("#article-userId").value
        let articleId = document.querySelector("#article-id").value
        let updatedArticle = createNewArticle(userId, title, synopsis, url)
        updatedArticle.id = articleId
        updateArticle(updatedArticle)
        .then ( () => {
            postArticles(userID)
        })
    })
}



function createNewArticle(userId, title, synopsis, url) {
    return {
        userId: parseInt(userId),
        url: url,
        title: title,
        synopsis: synopsis
    }

}


export {createArticlesSection, postArticles, createNewArticleForm}

