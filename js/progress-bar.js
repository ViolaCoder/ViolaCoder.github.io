document.addEventListener('DOMContentLoaded', () => {
    // Select all the small progress bars
    const progressBarsSmall = document.querySelectorAll('.progress-bar-small');

    progressBarsSmall.forEach(bar => {
        const percentage = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill-small');
        const percentText = bar.querySelector('.progress-percent-small');

        if (fill && percentText) {
            // Animate from 0 to the target percentage
            let width = 0;
            const target = parseInt(percentage);
            const increment = target / 60; // ~1 second animation at 60fps

            const interval = setInterval(() => {
                width += increment;
                if (width >= target) {
                    width = target;
                    clearInterval(interval);
                }
                fill.style.width = `${width}%`;
                percentText.textContent = `${Math.round(width)}%`;
            }, 16); // ~60fps
        }
    });
});
