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
var navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("right-0");
    menulist.classList.toggle("-right-full");
    line2.classList.toggle("hidden");
    line1.classList.toggle("rotate-45");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("top-0");
    line3.classList.toggle("bottom-0");
    menuicon.classList.toggle("top-3");
    navbar.classList.toggle("fixed")
});
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-open');
}