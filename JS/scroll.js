window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.primary-header');
    var navbarHeight = navbar.offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    navbar.classList.remove('azulFundo');
    navbar.classList.remove('brancoFundo');
    navbar.classList.remove('transparenteFundo');
    // Verificar se a navbar está no topo da página
    if (scrollPosition <= navbarHeight + 6.5 * windowHeight / 100) {
        navbar.classList.add('transparenteFundo');
        return;
    }

    var sectionsA = document.getElementsByClassName('a');
    for (var i = 0; i < sectionsA.length; i++) {
        var sectionAposition = sectionsA[i].getBoundingClientRect();
        if (sectionAposition.top <= navbarHeight + 6.5 * windowHeight / 100 && sectionAposition.bottom >= navbarHeight + 6.5 * windowHeight / 100) {
            navbar.classList.add('azulFundo');
            return;
        }
    }

    var sectionsB = document.getElementsByClassName('b');
    for (var i = 0; i < sectionsB.length; i++) {
        var sectionBposition = sectionsB[i].getBoundingClientRect();
        if (sectionBposition.top <= navbarHeight + 6.5 * windowHeight / 100 && sectionBposition.bottom >= navbarHeight + 6.5 * windowHeight / 100) {
            navbar.classList.add('brancoFundo');
            return;
        }
    }
});

// Footer //

document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

