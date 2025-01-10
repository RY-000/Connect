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
