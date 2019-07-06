
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

function getEventById(eventId) {
    return fetch(`http://localhost:3000/events/${eventId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json"}
})
    .then(oneUserEvent => oneUserEvent.json())
}

function returnEventByID(eventId, oneUserEvent) {
    return fetch(`http://localhost:3000/events/${eventId}`, {
        mehod: "PUT",
        headers: { "Content-Type": "application/json"},

    })
        .then(updatedEvent => updatedEvent.json())
}





export {getUserID, addNewUser, addNewEvent, getEventsForUser, getEventById, returnEventByID}
