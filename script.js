// Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  modeToggle.checked = true;
}

modeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', modeToggle.checked.toString());
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

function showModal() {
  modal.style.display = 'flex';
}

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Copy Code Function
function copyCode(codeId, copiedId) {
  const code = document.getElementById(codeId).innerText;
  navigator.clipboard.writeText(code).then(() => {
    const copiedMessage = document.getElementById(copiedId);
    copiedMessage.classList.add('visible');
    setTimeout(() => {
      copiedMessage.classList.remove('visible');
    }, 1500);
  }).catch(err => {
    console.error("Failed to copy:", err);
  });
}

// Toggle Preview Function
function togglePreview(previewId) {
  const previewBox = document.getElementById(previewId);
  previewBox.style.display = previewBox.style.display === 'block' ? 'none' : 'block';
}
