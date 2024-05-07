function closeAllDropdowns(exceptId) {
    ["languageDropdown", "themeDropdown"].forEach(function(id) {
        if (id !== exceptId) {
            var dropdown = document.getElementById(id);
            if (dropdown) {
                dropdown.style.display = "none";
            }
        }
    });
}

document.getElementById("settings").addEventListener("click", function() {
    var popup = document.getElementById("settingsPopup");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("settingsPopup").style.display = "none";
});

document.getElementById("languageIcon").addEventListener("click", function() {
    closeAllDropdowns("languageDropdown");
    var dropdown = document.getElementById("languageDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

Array.from(document.querySelectorAll("#languageDropdown a")).forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        var language = this.getAttribute("data-value");
        console.log("Selected language: " + language);
    });
});

document.getElementById("themeIcon").addEventListener("click", function() {
    closeAllDropdowns("themeDropdown");
    var dropdown = document.getElementById("themeDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});