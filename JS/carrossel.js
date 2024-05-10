document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-carrossel");
    const carrossel = document.querySelector(".carrossel");
    const fotos = document.querySelectorAll(".foto");
    let currentIndex = 1;
    let interval;
    let isDragging = false;
    let initialPosition = 0;

    function changePhoto(index) {
        const currentPhoto = fotos[currentIndex];
        const newPhoto = fotos[index];

        currentPhoto.style.zIndex = "1"; 
        newPhoto.style.zIndex = "2"; 

        if (index > currentIndex) {
            currentPhoto.style.transition = "transform 0.3s ease";
            currentPhoto.style.transform = `translateX(-100%)`; 
            newPhoto.style.transition = "transform 0.3s ease";
            newPhoto.style.transform = `translateX(0)`; 
            console.log(index);
        } else {
            currentPhoto.style.transition = "transform 0.3s ease";
            currentPhoto.style.transform = `translateX(100%)`; 
            newPhoto.style.transition = "transform 0.3s ease";
            newPhoto.style.transform = `translateX(0)`;
        }

        currentIndex = index;
        resetInterval();

        buttons.forEach((button, i) => {
            if (i === index) {
                button.style.padding = "8px 20dvw";
                button.style.backgroundColor = "";
            } else {
                button.style.backgroundColor = "white"; // Reset to default color
                button.style.padding = "5px 10dvw";
            }
        });
    }

    function handleKeyPress(event) {
        if (event.key === "ArrowLeft") {
            const newIndex = (currentIndex - 1 + fotos.length) % fotos.length;
            changePhoto(newIndex);
        } else if (event.key === "ArrowRight") {
            const newIndex = (currentIndex + 1) % fotos.length;
            changePhoto(newIndex);
        }
    }

    document.addEventListener("keydown", handleKeyPress);

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            changePhoto(index);
        });
    });

    function startCarrossel() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % fotos.length;
            changePhoto(currentIndex);
        }, 15000);
    }

    function resetInterval() {
        clearInterval(interval);
        startCarrossel();
    }

    startCarrossel();

    carrossel.addEventListener("mousedown", handleDragStart);
    carrossel.addEventListener("touchstart", handleDragStart);

    function handleDragStart(e) {
        isDragging = true;
        initialPosition = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
        carrossel.style.transition = "";
        e.preventDefault();
    }

    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

    function handleDragEnd() {
        if (isDragging) {
            isDragging = false;
            resetInterval();
        }
    }

    carrossel.addEventListener("mousemove", handleDragMove);
    carrossel.addEventListener("touchmove", handleDragMove);

    function handleDragMove(e) {
        if (isDragging) {
            const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
            const movement = clientX - initialPosition;
            const newIndex = currentIndex - Math.sign(movement);
            const newIndexClamped = Math.min(Math.max(newIndex, 0), fotos.length - 1);
            if (newIndexClamped !== currentIndex) {
                changePhoto(newIndexClamped);
            }
            isDragging = false;
        }
    }

    carrossel.addEventListener("mouseleave", () => {
        if (isDragging) {
            isDragging = false;
            resetInterval();
        }
    });

    setTimeout(() => {
        changePhoto(0);
    }, 50);
});
