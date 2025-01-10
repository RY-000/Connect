// Function to handle registration of an activity
function registerActivity(activity) {
    let registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    registeredEvents.push(activity);
    localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents));

    alert('Successfully registered for ' + activity + '!');
}

// Load registered events on current events page
if (window.location.href.includes('current-events.html')) {
    let registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    const eventsContainer = document.getElementById('registered-events');
    
    if (registeredEvents.length > 0) {
        eventsContainer.innerHTML = registeredEvents.map(event => `<p>${event}</p>`).join('');
    }
}
let signedUpEvents = []; // Store signed-up events

function signUpForEvent(eventId) {
    signedUpEvents.push(eventId);
    alert(`Signed up for event ${eventId}`);
}

function removeSignedUpEvent(eventId) {
    signedUpEvents = signedUpEvents.filter(event => event !== eventId);
    alert(`Removed from event ${eventId}`);
    const eventElement = document.querySelector(`.event[data-id='${eventId}']`);
    if (eventElement) {
        eventElement.remove(); // Remove the event from the DOM
    }
}
