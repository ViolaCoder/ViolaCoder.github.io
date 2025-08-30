document.addEventListener('DOMContentLoaded', () => {
    const progressBarsSmall = document.querySelectorAll('.progress-bar-small');

    progressBarsSmall.forEach(bar => {
        const percentage = parseInt(bar.getAttribute('data-progress'), 10);
        const fill = bar.querySelector('.progress-fill-small');
        const percentText = bar.querySelector('.progress-percent-small');

        // Animate bar fill
        fill.style.width = `${percentage}%`;

        // Update percent text
        if (percentText) {
            percentText.textContent = `${percentage}%`;
            if (percentage < 20) {
                percentText.classList.add('outside');
            } else {
                percentText.classList.remove('outside');
            }
        }
    });
});
