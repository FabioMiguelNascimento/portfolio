window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var sectionsA = document.getElementsByClassName('a');
    var sectionsB = document.getElementsByClassName('b');

    for (var i = 0; i < sectionsA.length; i++) {
        var sectionAposition = sectionsA[i].getBoundingClientRect();
        if (sectionAposition.top <= 0 && sectionAposition.bottom >= 0) {
            navbar.style.backgroundColor = 'var(--azulFundo)';
            return; 
        }
    }

    for (var i = 0; i < sectionsB.length; i++) {
        var sectionBposition = sectionsB[i].getBoundingClientRect();
        if (sectionBposition.top <= 0 && sectionBposition.bottom >= 0) {
            navbar.style.backgroundColor = 'white';
            return; 
        }
    }

    if (window.pageYOffset === 0) {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = 'var(--azulFundo)';
    }
});