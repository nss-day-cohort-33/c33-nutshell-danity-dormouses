
function getUserID() {
    return fetch("http://localhost:3000/users")
    .then( userData => userData.json())
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
function addNewEvent(newEvent) {
    return fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newEvent)
    })
    .then(events => events.json())
}

function getEventsForUser(userId) {
    return fetch(`http://localhost:3000/events?userId=${userId}&_sort=date`)
    .then(userEvents => userEvents.json())
}

function getEventById(eventId) {
    return fetch(`http://localhost:3000/events/${eventId}`)
    .then(oneUserEvent => oneUserEvent.json())
}

function returnEventByID(eventId, oneUserEvent) {
    return fetch(`http://localhost:3000/events/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(oneUserEvent)
    })
    .then(updatedEvents => updatedEvents.json())
}





export {getUserID, addNewUser, addNewEvent, getEventsForUser, getEventById, returnEventByID}
