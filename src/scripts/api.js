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

function addNewChat(textInput) {
    return fetch("

export {getUserID, addNewUser}