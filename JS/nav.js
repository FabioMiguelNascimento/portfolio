const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

// Fechar o menu ao clicar em links dentro dele
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#primary-navigation a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
});

window.addEventListener('click', function (e) {
    if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute("aria-expanded", "false");
    }
});




// Get all custom select elements
let customSelects = document.querySelectorAll('.custom-select');

// Attach click event listeners to each custom select
customSelects.forEach(function (select) {
    let selectSelected = select.querySelector('.select-selected');
    let selectItems = select.querySelector('.select-items');
    let options = selectItems.querySelectorAll('div');

    // Toggle the dropdown visibility when the select box is clicked
    selectSelected.addEventListener('click', function () {
        if (selectItems.style.display === 'block') {
            selectItems.style.display = 'none';
        } else {
            selectItems.style.display = 'block';
        }
    });

    // Set the selected option, hide the dropdown, and change language when an option is clicked
    options.forEach(function (option) {
        option.addEventListener('click', function () {
            selectItems.style.display = 'none';
            changeLanguage(this.id); // Call the changeLanguage function with the id of the clicked option
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (e) {
        if (!select.contains(e.target)) {
            selectItems.style.display = 'none';
        }
    });
});