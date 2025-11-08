// script.js: Handles modal interactions for the team member cards

// Get references to DOM elements
const modal = document.getElementById('member-modal');
const modalName = document.getElementById('modal-name');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description'); // Now a <div> for HTML support
const closeBtn = document.getElementById('close-modal');
const memberCards = document.querySelectorAll('.member-card');

// Function to open the modal and populate it with data
function openModal(name, title, description) {
    modalName.textContent = name;
    modalTitle.textContent = title;
    modalDescription.innerHTML = description; // Use innerHTML to render HTML content
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Add click event listeners to each member card to open the modal
memberCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        openModal(name, title, description);
    });
});

// Add click event listener to the close button
closeBtn.addEventListener('click', closeModal);

// Add click event listener to the modal overlay to close when clicked outside the content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();