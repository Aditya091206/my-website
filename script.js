// Get references to DOM elements
const modal = document.getElementById('member-modal');
const modalName = document.getElementById('modal-name');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.getElementById('close-modal');
const memberCards = document.querySelectorAll('.member-card');

// Open modal
function openModal(name, title, description) {
  modalName.textContent = name;
  modalTitle.textContent = title;
  modalDescription.innerHTML = description;
  modal.setAttribute('aria-hidden', 'false');
}

// Close modal
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}

// Click handlers
memberCards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.getAttribute('data-name');
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    openModal(name, title, description);
  });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();