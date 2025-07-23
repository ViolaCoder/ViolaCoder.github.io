// js/progress-bar.js

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill');
        const percentText = bar.querySelector('.progress-percent');

        if (fill && percentText && progress) {
            // Set the width of the fill immediately for non-animated display or fallback
            // This is the primary setter if IntersectionObserver doesn't fire immediately
            fill.style.width = `${progress}%`;
            
            // Update the percentage text
            percentText.textContent = `${progress}%`;
        }
    });

    // Optional: Add intersection observer for animation on scroll if desired
    // FIX: Corrected ID to 'current-projects' to match the HTML section ID
    const projectsSection = document.getElementById('current-projects'); 
    if (projectsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const barsToAnimate = entry.target.querySelectorAll('.progress-bar');
                    barsToAnimate.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        const fill = bar.querySelector('.progress-fill');
                        if (fill && progress) {
                            fill.style.width = `${progress}%`; // Trigger animation when in view
                        }
                    });
                    // Stop observing once animated to prevent re-animation on subsequent scrolls
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

        observer.observe(projectsSection);
    }
});
