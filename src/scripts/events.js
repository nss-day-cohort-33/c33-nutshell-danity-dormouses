import { createDashBoard } from "./dashboard.js";
import { addNewEvent } from "./api.js";

// Define variable to target html container for tasks
let eventPageContainer = document.querySelector("#event-page");

// Declare a function that lays out the html format of the main task page
function createEvent() {
  eventPageContainer.innerHTML = `
    <button id="new-event">New Event</button>
    `;
  document.querySelector("#new-event").addEventListener("click", () => {
    createNewEventForm();
  });
}

function createNewEventForm() {
  eventPageContainer.innerHTML = `
    <fieldset id="newEvent">
        <label for="event-name"><h4>Name: </h4></label>
        <input id="event-name" type="text" name="event-name" required>
        <label for="event-date"><h4>Date: </h4></label>
        <input id="event-date" type="text" name="event-date" required>
        <label for="event-time"><h4>Time: </h4></label>
        <input id="event-time" type="text" name="event-time" required>
        <label for="event-location"><h4>Location: </h4></label>
        <input id="event-location" type="text" name="event-location" required>
        <button id="save_event">Save Event</button>
    </fieldset>
    `;
  document.querySelector("#save_event").addEventListener("click", () => {
    let myNewEventName = {
      title: document.querySelector("#event-name").value,
      date: document.querySelector("#event-date").value,
      time: document.querySelector("#event-time").value,
      location: document.querySelector("#event-location").value
    };
    addNewEvent(myNewEventName);
  });
}

export { createEvent };
