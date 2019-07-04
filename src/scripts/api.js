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

function addNewEvent(newEvent) {
    return fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newEvent)
    })
    .then(events => events.json())
}

function getEventsForUser(userId) {
    return fetch(`http://localhost:3000/events?userId=${userId}&_sort=date`, {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    })
    .then(userEvents => userEvents.json())
}


export {getUserID, addNewUser, addNewEvent, getEventsForUser}
