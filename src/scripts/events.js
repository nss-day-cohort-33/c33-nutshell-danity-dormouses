import {
    addNewEvent, getEventsForUser, getEventById, returnEventByID
} from "./api.js";

// Define variable to target html container by id for events

let eventPageContainer = document.querySelector("#event-page");

// Write a function to create a form for a new event. Add an event listener that returns an object with the values of each field and the userId from session storage as a number. Then invoke api fectch POST and renderEventSection

function createNewEventForm() {
  eventPageContainer.innerHTML = `
      <fieldset>
          <label for="event-name"><h4>Name: </h4></label>
          <input id="event-name" type="text" name="event-name" required>
          <label for="event-date"><h4>Date: </h4></label>
          <input id="event-date" type="date" name="event-date" required>
          <label for="event-time"><h4>Time: </h4></label>
          <input id="event-time" type="time" name="event-time" required>
          <label for="event-location"><h4>Location: </h4></label>
          <input id="event-location" type="text" name="event-location" required>
          <button id="save-event">Save Event</button>
      </fieldset>
      `;
  document.querySelector("#save-event").addEventListener("click", () => {
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

// Create a function that renders an to eventPageContainer and then gets all events by userID, loops over the new array of events and render them to the DOM.

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
    editBtnListener();
  });
}

// Define a function that takes an argument of the object oneUserEvent and returns an html string which contains the properties of the object.

let userEventsPage = oneUserEvent => {
  return `
    <article id="eventElement-${oneUserEvent.id}">
          <h3>${oneUserEvent.title}</h3>
          <ul class="eventDetails" style="list-style-type:none">
          <li>Date: ${oneUserEvent.date}</li>
          <li>Time: ${oneUserEvent.time}</li>
          <li>Location: ${oneUserEvent.location}</li>
          </ul>
          <button id="edit-${oneUserEvent.id}" class="editEventBtn">Edit</button>
          </article>
      `;
};

function editBtnListener() {
  let editBtnArray = document.querySelectorAll(".editEventBtn");
  editBtnArray.forEach(editBtn => {
    editBtn.addEventListener("click", () => {
      let editBtnId = event.target.id;
      let editBtnIdArray = editBtnId.split("-");
      let editBtnIdNum = editBtnIdArray[1];
      console.log(editBtnIdNum);
      getEventById(editBtnIdNum).then(oneUserEvent => {
        let editEventForm = `<fieldset>

          <label for="event-name"><h4>Name: </h4></label>
          <input id="event-name" type="text" name="event-name" value="${oneUserEvent.title}" required>
          <label for="event-date"><h4>Date: </h4></label>
          <input id="event-date" type="date" name="event-date" value="${oneUserEvent.date}" required>
          <label for="event-time"><h4>Time: </h4></label>
          <input id="event-time" type="time" name="event-time" value="${oneUserEvent.time}" required>
          <label for="event-location"><h4>Location: </h4></label>
          <input id="event-location" type="text" name="event-location" value="${oneUserEvent.location}" required>
          <button id="saveEvent-${oneUserEvent.id}">Save Event</button>
      </fieldset>
`;
        let editFormContainer = document.querySelector(`#eventElement-${oneUserEvent.id}`);
        editFormContainer.innerHTML = editEventForm;
        document.querySelector(`#saveEvent-${oneUserEvent.id}`).addEventListener("click", event => {
            let saveBtn = event.target.id;
            let editedEvent = saveBtn.split("-");
            let editBtnIdNum = editedEvent[1];
            let updatedEvent = {
                userId: +sessionStorage.getItem("userId"),
                title: document.querySelector("#event-name").value,
                date: document.querySelector("#event-date").value,
                time: document.querySelector("#event-time").value,
                location: document.querySelector("#event-location").value
            }
            returnEventByID(editBtnIdNum, updatedEvent).then( () => {
                    renderEventSection();
                    editBtnListener();
            })
      });
    })
  });
})
}


export { renderEventSection }
