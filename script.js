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
