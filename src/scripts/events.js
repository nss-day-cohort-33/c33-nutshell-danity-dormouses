import { addNewEvent, getEventsForUser } from "./api.js";

// Define variable to target html container for tasks
let eventPageContainer = document.querySelector("#event-page");

function renderEventSection() {
  eventPageContainer.innerHTML = `
    <button id="new-event">New Event</button>
    `;
  getEventsForUser(sessionStorage.getItem("userId")).then(usersEvents => {
    usersEvents.forEach(userEvent => {
      eventPageContainer.innerHTML += userEventsPage(userEvent);
    });
    document.querySelector("#new-event").addEventListener("click", () => {
      createNewEventForm();
    });
  });
}
let userEventsPage = oneUserEvent => {
  return `
  <article>
        <h2>Name: ${oneUserEvent.title}</h2>
        <ul class="eventDetails" style="list-style-type:none">
        <li>Date: ${oneUserEvent.date}</li>
        <li>Time: ${oneUserEvent.time}</li>
        <li>Location: ${oneUserEvent.location}</li>
        </ul>
        </article>
    `;
};

// Create a function that gets all events for one user and renders to eventPageContainer
// function
function createNewEventForm() {
  eventPageContainer.innerHTML = `
    <fieldset id="newEvent">
        <label for="event-name"><h4>Name: </h4></label>
        <input id="event-name" type="text" name="event-name" required>
        <label for="event-date"><h4>Date: </h4></label>
        <input id="event-date" type="date" name="event-date" required>
        <label for="event-time"><h4>Time: </h4></label>
        <input id="event-time" type="time" name="event-time" required>
        <label for="event-location"><h4>Location: </h4></label>
        <input id="event-location" type="text" name="event-location" required>
        <button id="save_event">Save Event</button>
    </fieldset>
    `;
  document.querySelector("#save_event").addEventListener("click", () => {
    let myNewEvent = {
      userId: +sessionStorage.getItem("userId"),
      title: document.querySelector("#event-name").value,
      date: document.querySelector("#event-date").value,
      time: document.querySelector("#event-time").value,
      location: document.querySelector("#event-location").value
    };
    addNewEvent(myNewEvent).then(() => renderEventSection());
  });
}

export { renderEventSection };
