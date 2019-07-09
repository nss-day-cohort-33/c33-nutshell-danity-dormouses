function getUserID() {
    return fetch("http://localhost:3000/users")
    .then ( userData => userData.json())
}

function addNewUser(newUser) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })
.then(results => results.json())
}

function getArticles(userId) {
    return fetch(`http://localhost:3000/news?userId=${userId}&_sort=timeStamp&_order=desc`)
    .then (newsArticles => newsArticles.json())
}

function addNewArticle(newArticle) {
    return fetch("http://localhost:3000/news", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newArticle)
    })
.then(results => results.json())
}

function deleteArticle(articleID) {
    return fetch(`http://localhost:3000/news/${articleID}`,{
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
  })
}

function updateArticle(updatedArticle) {
    return fetch(`http://localhost:3000/news/${updatedArticle.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedArticle)
    })

}


export {getUserID, addNewUser, getArticles, addNewArticle, deleteArticle, updateArticle}
