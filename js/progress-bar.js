document.addEventListener('DOMContentLoaded', function() {
    // For original large progress bars (if still present somewhere else, or for future use)
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill');
        const percentText = bar.querySelector('.progress-percent');
        
        if (fill && percentText) {
            fill.style.width = percentage + '%';
            percentText.textContent = percentage + '%';
        }
    });

    // For the new smaller progress bars in the About section
    const progressBarsSmall = document.querySelectorAll('.progress-bar-small');
    progressBarsSmall.forEach(bar => {
        const percentage = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill-small');
        const percentText = bar.querySelector('.progress-percent-small');
        
        if (fill && percentText) {
            fill.style.width = percentage + '%';
            percentText.textContent = percentage + '%';
        }
    });
});
