// Function to register an activity
function registerActivity(activity) {
    let registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    if (!registeredEvents.includes(activity)) {
        registeredEvents.push(activity);
        localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents));
        alert('Successfully registered for ' + activity + '!');
    } else {
        alert('You are already registered for ' + activity + '!');
    }
}

// Load registered events on current events page
function loadRegisteredEvents() {
    let registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    const eventsContainer = document.getElementById('registered-events');
    
    if (registeredEvents.length > 0) {
        eventsContainer.innerHTML = registeredEvents.map(event => `
            <div class="registered-event">
                <h2>${event}</h2>
                <button onclick="dropEvent('${event}')">X</button>
            </div>
        `).join('');
    } else {
        eventsContainer.innerHTML = '<p>No registered events found.</p>';
    }
}

function signUpForEvent(eventId) {
    const event = `Event ${eventId}`;
    registerActivity(event); // Register the event in localStorage
    loadRegisteredEvents(); // Refresh the registered events display
}

function dropEvent(event) {
    let registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    registeredEvents = registeredEvents.filter(e => e !== event); // Remove the event
    localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents)); // Update localStorage
    loadRegisteredEvents(); // Refresh the registered events display
}

// On page load, load the registered events
if (window.location.href.includes('current-events.html')) {
    loadRegisteredEvents();
}
