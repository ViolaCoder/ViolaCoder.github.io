document.addEventListener('DOMContentLoaded', () => {
    // Select all the small progress bars in the About section
    const progressBarsSmall = document.querySelectorAll('.progress-bar-small');

    // Set the initial width and percentage for all small bars
    progressBarsSmall.forEach(bar => {
        const percentage = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill-small');
        const percentText = bar.querySelector('.progress-percent-small');

        if (fill && percentText) {
            fill.style.width = `${percentage}%`;
            percentText.textContent = `${percentage}%`;
        }
    });

    // We'll leave the old IntersectionObserver commented out
    // because the bars are now on the "About" page and not on a scroll-triggered section.
    // If you want to add animation on scroll later, we'll need to adapt this for the "About" section.
});
