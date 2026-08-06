window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Category Click Effect
const cards = document.querySelectorAll('.cat-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Simple visual feedback
        cards.forEach(c => c.style.borderColor = 'transparent');
        card.style.borderColor = '#D4AF37';
        
        const category = card.querySelector('span').innerText;
        console.log(`Searching for: ${category}`);
    });
});

// Search functionality placeholder
document.querySelector('.btn-search').addEventListener('click', function(e) {
    e.preventDefault();
    const destination = document.querySelector('input[type="text"]').value;
    if(destination) {
        alert(`Searching for luxury experiences in ${destination}...`);
    } else {
        alert("Please enter a destination to begin your journey.");
    }
});