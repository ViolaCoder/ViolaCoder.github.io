// js/progress-bar.js

document.addEventListener('DOMContentLoaded', () => {
    // Log that the script has started
    console.log("PROGRESS_BAR_DEBUG: DOMContentLoaded event fired. Script is running.");

    const progressBars = document.querySelectorAll('.progress-bar');
    // Log how many progress bars were found
    console.log(`PROGRESS_BAR_DEBUG: Found ${progressBars.length} elements with class 'progress-bar'.`);

    progressBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill');
        const percentText = bar.querySelector('.progress-percent');

        // Log the details for each bar being processed
        console.log(`PROGRESS_BAR_DEBUG: Processing bar ${index + 1}. Data-progress: ${progress}.`);

        if (fill && percentText && progress) {
            // Log before attempting to set styles
            console.log(`PROGRESS_BAR_DEBUG: Attempting to set width for bar ${index + 1} to ${progress}%.`);
            fill.style.width = `${progress}%`;
            // Also explicitly set background-color here with higher priority, in case CSS is stubborn
            fill.style.backgroundColor = '#28a745'; // Force green color

            percentText.textContent = `${progress}%`;
            console.log(`PROGRESS_BAR_DEBUG: Successfully updated percentage text for bar ${index + 1}.`);
        } else {
            console.warn(`PROGRESS_BAR_DEBUG: Skipping bar ${index + 1} due to missing elements or data. Fill: ${fill}, PercentText: ${percentText}, Progress: ${progress}`);
        }
    });

    // Optional: Add intersection observer for animation on scroll if desired
    // (This part ensures animation on scroll, and was corrected in the last update)
    const projectsSection = document.getElementById('current-projects'); 
    if (projectsSection) {
        console.log("PROGRESS_BAR_DEBUG: Setting up IntersectionObserver for #current-projects.");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("PROGRESS_BAR_DEBUG: #current-projects is intersecting. Triggering animations.");
                    const barsToAnimate = entry.target.querySelectorAll('.progress-bar');
                    barsToAnimate.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        const fill = bar.querySelector('.progress-fill');
                        if (fill && progress) {
                            fill.style.width = `${progress}%`; // Trigger animation
                        }
                    });
                    // Unobserve to run animation only once when section comes into view
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.2 });

        observer.observe(projectsSection);
    } else {
        console.warn("PROGRESS_BAR_DEBUG: #current-projects section not found for IntersectionObserver.");
    }
});
