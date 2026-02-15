let events = [];

const eventForm = document.querySelector('#event'); 
const eventTitle = document.querySelector('#event-title');
const eventDate = document.querySelector('#event-date');
const eventCategory = document.querySelector('#event-category');
const eventDescription = document.querySelector('#event-description');
const errorMessage = document.querySelector('#error-message');
const eventsContainer = document.querySelector('#events-container');
const clearBtn = document.querySelector('#clear-btn');
const sampleBtn = document.querySelector('#sample-btn');

const sampleEvents = [
    {
        title: 'Team Meeting',
        date: '2023-10-15',
        category: 'Work',
        description: 'Weekly team discussion.'
    },
    {
        title: 'Birthday Party',
        date: '2023-10-20',
        category: 'Personal',
        description: 'Birthday celebration at home.'
    }
];

function validateForm() {
    if (
        eventTitle.value.trim() === '' ||
        eventDate.value === '' ||
        eventCategory.value === '' ||
        eventDescription.value.trim() === ''
    ) {
        errorMessage.textContent = 'All fields are required';
        return false;
    }
    errorMessage.textContent = '';
    return true;
}


function clearForm() {
    eventTitle.value = '';
    eventDate.value = '';
    eventCategory.value = '';
    eventDescription.value = '';
}

function renderEvents() {
    eventsContainer.innerHTML = '';

    if (events.length === 0) {
        eventsContainer.innerHTML =
            '<p class="no-events">No events yet. Add your first event.</p>';
        return;
    }

    events.forEach((event, index) => {
        const card = document.createElement('div');
        card.classList.add('event-card');

        card.innerHTML = `
            <h3 class="event-title">${event.title}</h3>
            <p class="event-date">Date: ${event.date}</p>
            <span class="event-category">${event.category}</span>
            <p class="event-description">${event.description}</p>
            <button class="delete-btn" data-index="${index}">×</button>
        `;

        eventsContainer.appendChild(card);
    });
}

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const newEvent = {
        title: eventTitle.value.trim(),
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value.trim()
    };

    events.push(newEvent);
    renderEvents();
    clearForm();
});

eventsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        events.splice(index, 1);
        renderEvents();
    }
});

clearBtn.addEventListener('click', function () {
    events = [];
    renderEvents();
});

sampleBtn.addEventListener('click', function () {
    events = [...events, ...sampleEvents];
    renderEvents();
});

renderEvents();