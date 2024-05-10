window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var header = document.getElementById('header');
    var sectionsA = document.getElementsByClassName('a');
    var sectionsB = document.getElementsByClassName('b');
    
    navbar.classList.remove('azulFundo');
    navbar.classList.remove('branco');
    navbar.classList.remove('transparente');

    if (window.scrollY <= header.offsetTop) {
        navbar.classList.add('transparente');
        return;
    }

    for (var i = 0; i < sectionsA.length; i++) {
        var sectionAposition = sectionsA[i].getBoundingClientRect();
        if (sectionAposition.top <= 0 && sectionAposition.bottom >= 0) {
            navbar.classList.add('azulFundo');
            return; 
        }
    }

    for (var i = 0; i < sectionsB.length; i++) {
        var sectionBposition = sectionsB[i].getBoundingClientRect();
        if (sectionBposition.top <= 0 && sectionBposition.bottom >= 0) {
            navbar.classList.add('branco');
            return; 
        }
    }

       
});