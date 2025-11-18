// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

// BACK TO TOP BUTTON
const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top when button clicked
topBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
