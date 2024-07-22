let botaoTop = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        botaoTop.classList.add('active');
    } else {
        botaoTop.classList.remove('active');
    }
})

botaoTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
    })
})