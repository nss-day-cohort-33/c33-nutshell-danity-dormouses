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

function getArticles() {
    return fetch("http://localhost:3000/news")
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




export {getUserID, addNewUser, getArticles, addNewArticle}