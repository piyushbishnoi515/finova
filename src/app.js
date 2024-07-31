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
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}
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
        infinite: true,       
        speed: 500,        
        slidesToShow: 2,   
        slidesToScroll: 1,   
        centerMode: false, 
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
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
            heading.classList.toggle("bg-[linear-gradient(180deg,_#AA832F_0%,_#795302_100%)]");
            heading.classList.toggle("bg-[#11100D");
            heading.lastElementChild.classList.toggle("rotate-180");
            heading.lastElementChild.classList.toggle("stroke-white");
            heading.lastElementChild.classList.toggle("stroke-[#AA832F]");
            heading.nextElementSibling.classList.toggle("hidden");
        });
    });
});
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
};
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const links = menu.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
