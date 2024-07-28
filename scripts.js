document.addEventListener('DOMContentLoaded', () => {
    const collegeName = document.querySelector('.college-name');

    // Function to change font size dynamically
    function changeFontSize() {
        const fontSize = Math.random() * (2.5 - 1.5) + 1.5; // Random font size between 1.5em and 2.5em
        collegeName.style.fontSize = `${fontSize}em`;
    }

    // Change font size every 2 seconds
    setInterval(changeFontSize, 2000);
});
