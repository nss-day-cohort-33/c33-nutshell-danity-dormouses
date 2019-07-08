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

function addNewMessage(newMessage) {
    return fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newMessage)
    })
.then(results => results.json())
}

function getMessages() {
    return fetch("http://localhost:3000/messages")
    .then(messages => messages.json())
}

export {getUserID, addNewUser, addNewMessage, getMessages}