import {getArticles, addNewArticle, getUserID} from "./api.js"
import { updateArticleSection } from "./dashboard.js";

let articlesSection = document.getElementById("article-page")
let dataKeyUserName = sessionStorage.getItem("name")
let dataKeyEmail = sessionStorage.getItem("email")
// console.log(dataKeyUserName)
// console.log(dataKeyEmail)




function createArticlesSection() {

  return  `
    <h2>Articles</h2>
    <button id="create-new-article">Create New Article</button>
    `
}


function createNewArticleForm() {
    document.getElementById("create-new-article").addEventListener("click", () => {

        articlesSection.innerHTML = `
        <h1>Create A New Article</h1>
        <input id="article-title" type="text" placeholder="Article Title">
        <input id="article-synopsis" type="text" placeholder="Article Synopsis">
        <input id="article-url" type="text" placeholder="Article Url">
        <button id="save-article-btn">Save Article</button>
        `
        saveTheArticle()
    })

}


 function saveTheArticle(){
     document.getElementById("save-article-btn").addEventListener("click", () => {
    console.log("you clicked")

    let articleTitle = document.getElementById("article-title").value
    let articleSynopsis = document.getElementById("article-synopsis").value
    let articleUrl = document.getElementById("article-url").value
    let newArticleObject = createNewArticle(articleTitle,articleSynopsis,articleUrl)

    addNewArticle(newArticleObject)
    .then( () => {updateArticleSection()})

    })
}


function createNewArticle(title, synopsis, url) {
    return {
        url: url,
        title: title,
        synopsis: synopsis
    }

}



let physicalArticles = document.getElementById("article-articles")

function postArticles() {
    getArticles()
    .then (articleData => {
    articleData.forEach(article => {
        physicalArticles.innerHTML += createArticleForm(article)

    })

    })
}


function createArticleForm(data) {
    return `
    <h3>${data.title}</h3>
    <h4>${data.synopsis}</h4>
    <a href=${data.url}>Link to Article</a>
    <button id="edit-btn">Edit</button>
    <button id="delete-btn">Delete</button>
    `
}



export {createArticlesSection, postArticles, createNewArticleForm}

