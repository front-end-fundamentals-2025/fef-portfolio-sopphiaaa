document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Sun icon for light mode
    } else {
        darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save user preference and update icon
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            this.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            this.textContent = '🌙';
        }
    });
});