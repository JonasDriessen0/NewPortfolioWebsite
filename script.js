// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Update current time
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

setInterval(updateTime, 1000);
updateTime(); // Initial call

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Enables infinite loop
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // Auto slides every 3 seconds
            disableOnInteraction: false,
        },
        effect: 'fade', // Optional: You can use different effects like 'slide', 'fade', etc.
    });
});

document.getElementById('discord-button').addEventListener('click', function (e) {
    e.preventDefault();
    const discordUsername = 'travis_scotland'; // Replace with your actual Discord username
    navigator.clipboard.writeText(discordUsername).then(() => {
        alert('Discord username copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});