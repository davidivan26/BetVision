// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Form validation on submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous messages
        formMessage.textContent = '';
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill in all fields!';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';
            formMessage.style.color = 'green';
            form.reset(); // Reset the form after successful submission
        }
    });

    // Filter Betting Tips based on selected sport
    const filterButton = document.querySelector('.filter-button');
    const sportSelect = document.getElementById('sport');
    
    filterButton.addEventListener('click', () => {
        const selectedSport = sportSelect.value;
        filterTipsBySport(selectedSport);
    });

    // Function to simulate filtering of betting tips
    function filterTipsBySport(sport) {
        const tipCards = document.querySelectorAll('.tip-card');
        
        tipCards.forEach(card => {
            const cardSport = card.querySelector('h3').textContent.split('(')[1].split(')')[0].trim().toLowerCase();
            
            if (cardSport === sport.toLowerCase() || sport === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
