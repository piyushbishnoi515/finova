const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const volumeLeft = document.getElementById('volumeLeft');
const maxVolume = 200;

const updateVolumeDisplay = (volume) => {
    document.documentElement.style.setProperty('--volume-fill', `${(volume / maxVolume) * 100}%`);
    volumeValue.textContent = volume;
    volumeLeft.textContent = maxVolume - volume;
};

volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value, 10);
    updateVolumeDisplay(volume);
});

updateVolumeDisplay(volumeSlider.value);
function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            // Handle countdown end
            document.getElementById('days').innerHTML = '0';
            document.getElementById('hours').innerHTML = '0';
            document.getElementById('minutes').innerHTML = '0';
            document.getElementById('seconds').innerHTML = '0';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    // Update countdown every 1 second
    const timerInterval = setInterval(updateCountdown, 1000);

    // Initial call
    updateCountdown();
}

// Set target date for the countdown (format: YYYY-MM-DD HH:MM:SS)
const targetDate = new Date('2024-12-31T23:59:59');
startCountdown(targetDate);
let menulist = document.querySelector(".menu-list");
let menuicon = document.querySelector(".menu-icon");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line-center");
let line3 = document.querySelector(".line3");
let body = document.body;
let nav = document.querySelectorAll(".nav-heading");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("right-0");
    menulist.classList.toggle("-right-full");
    line2.classList.toggle("hidden");
    line1.classList.toggle("rotate-45");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("top-0");
    line3.classList.toggle("bottom-0");
    menuicon.classList.toggle("top-3");
    body.classList.toggle("overflow-hidden");
});

nav.forEach(function (e) {
    e.addEventListener("click", function () {
        menulist.classList.toggle("right-0");
        menulist.classList.toggle("-right-full");
        line2.classList.toggle("hidden");
        line1.classList.toggle("rotate-45");
        line3.classList.toggle("-rotate-45");
        line3.classList.toggle("top-0");
        line3.classList.toggle("bottom-0");
        menuicon.classList.toggle("top-3");
        body.classList.toggle("overflow-hidden");
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-open');

}
$(document).ready(function () {
    $('.slick-slider').slick({
        dots: true,
        arrows: false,
        // Enable pagination dots
        infinite: true,       // Loop the slides
        speed: 500,           // Speed of transition
        slidesToShow: 2,      // Number of slides to show at once
        slidesToScroll: 1,    // Number of slides to scroll at once
        centerMode: false,    // Disable center mode (if not needed)
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ],
    });
});
const btn = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

btn.addEventListener("click", function () {
    circle.classList.toggle("left-1");
    circle.classList.toggle("left-auto");
    circle.classList.toggle("right-1");

});

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeadings = document.querySelectorAll(".accordion-heading");

    accordionHeadings.forEach((heading) => {
        heading.addEventListener("click", function () {
            // Close all other accordions
            accordionHeadings.forEach((item) => {
                if (item !== heading) {
                    item.classList.remove("bg-[linear-gradient(180deg,_#AA832F_0%,_#795302_100%)]");
                    item.classList.add("bg-[#11100D");
                    item.classList.remove("border-[]");
                    item.classList.add("border-[#2A2825]");
                    item.lastElementChild.classList.remove("rotate-180");
                    item.nextElementSibling.classList.add("hidden");
                }
            });

            // Toggle the clicked accordion
            heading.classList.toggle("bg-[linear-gradient(180deg,_#AA832F_0%,_#795302_100%)]");
            heading.classList.toggle("bg-[#11100D");
            heading.lastElementChild.classList.toggle("rotate-180");
            heading.nextElementSibling.classList.toggle("hidden");
        });
    });
});
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
};

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});