document.addEventListener('DOMContentLoaded', () => {
    const logosSlide = document.querySelector('.logos-slide');
    const clone = logosSlide.cloneNode(true);
    document.querySelector('.logos').appendChild(clone);
});
