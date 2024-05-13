document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const fotos = document.querySelectorAll(".foto");
    const buttons = document.querySelectorAll(".btn-carrossel");
    let currentIndex = 1;
    let interval;
    let isDragging = false;
    let startX, distX;

    const transitionDuration = "0.3s ease";

    function changePhoto(index) {
        const currentPhoto = fotos[currentIndex];
        const newPhoto = fotos[index];

        currentPhoto.style.transition = newPhoto.style.transition = `transform ${transitionDuration}`;

        currentPhoto.style.transform = `translateX(${index > currentIndex ? -100 : 100}%)`;
        newPhoto.style.transform = "translateX(0)";

        currentIndex = index;
        resetInterval();

        buttons.forEach((button, i) => {
            button.style.padding = i === index ? "2px 20dvw" : "1px 10dvw";
            button.style.backgroundColor = i === index ? "" : "white";
        });
    }

    function handleKeyPress(event) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            const newIndex = (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + fotos.length) % fotos.length;
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
            const newIndex = (currentIndex + 1) % fotos.length;
            changePhoto(newIndex);
        }, 150000);
    }

    function resetInterval() {
        clearInterval(interval);
        startCarrossel();
    }

    startCarrossel();

    let initialPosition = 0;

    function handleDragStart(e) {
        isDragging = true;
        startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
        initialPosition = startX;
        carrossel.style.transition = "none";
    }

    function handleDragMove(e) {
        if (isDragging) {
            const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
            distX = clientX - startX;

            if (Math.abs(distX) > 10) {
                const newIndex = currentIndex - Math.sign(distX);
                const newIndexClamped = Math.min(Math.max(newIndex, 0), fotos.length - 1);
                if (newIndexClamped !== currentIndex) {
                    changePhoto(newIndexClamped);
                }
                isDragging = false;
            }
        }
    }

    function handleDragEnd() {
        if (isDragging) {
            isDragging = false;
            resetInterval();
        }
    }

    carrossel.addEventListener("mousedown", handleDragStart);
    carrossel.addEventListener("touchstart", handleDragStart);
    carrossel.addEventListener("mousemove", handleDragMove);
    carrossel.addEventListener("touchmove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

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
