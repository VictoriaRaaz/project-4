// Select images from both sections
const IMAGES = document.querySelectorAll('.sea-container img, .earth-container img');
const MODAL = document.getElementById('imageModal');
const MODAL_IMAGE = document.getElementById('modalImage');
const CLOSE_MODAL = document.getElementById('closeModal');

// Open the modal with the selected image
IMAGES.forEach(image => {
  image.addEventListener('click', () => {
    MODAL.style.display = 'flex';
    MODAL_IMAGE.src = image.src;
  });
});

// Close the modal
CLOSE_MODAL.addEventListener('click', () => {
  MODAL.style.display = 'none';
});

// Close the modal when clicking outside the image
//MODAL.addEventListener('click', (event) => {
//if (event.target === MODAL) {
//MODAL.style.display = 'none';
//}
//});
