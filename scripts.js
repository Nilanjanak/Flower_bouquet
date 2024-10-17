let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to first slide
    }
    if (index < 0) {
        currentSlideIndex = slides.length - 1; // Go to last slide
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[currentSlideIndex].style.display = "block"; // Show the selected slide
}

function moveSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

// Auto-slide feature (optional)
// Uncomment the below lines to enable auto-sliding every 5 seconds
/*
setInterval(() => {
    moveSlide(1); // Move to the next slide automatically
}, 5000);
*/


// Switch between Login and Register
document.getElementById('switch-to-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});
