const thumbnails = document.querySelectorAll('.thumbnail');
const overlay = document.getElementById('overlay');
const fullImage = document.getElementById('fullImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const imageSrc = this.src;
        fullImage.src = imageSrc;
        overlay.style.display = 'flex';
    });
});

function closeOverlay() {
    overlay.style.display = 'none';
}
