// js/progress-bar.js

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill');
        const percentText = bar.querySelector('.progress-percent');

        if (fill && percentText && progress) {
            // Set the width of the fill
            fill.style.width = `${progress}%`;
            
            // Update the percentage text
            percentText.textContent = `${progress}%`;

            // Optional: You could add a check if the percentage text color needs to change for readability
            // If the fill covers the text, you might change text color to white
            // For now, it's positioned to the right, so current color should be fine.
        }
    });

    // Optional: Add intersection observer for animation on scroll if desired
    // This makes the animation trigger when the section comes into view
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const barsToAnimate = entry.target.querySelectorAll('.progress-bar');
                    barsToAnimate.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        const fill = bar.querySelector('.progress-fill');
                        if (fill && progress) {
                            fill.style.width = `${progress}%`; // Trigger animation
                        }
                    });
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

        observer.observe(projectsSection);
    }
});
