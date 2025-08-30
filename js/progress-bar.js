document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar-small');

    progressBars.forEach(bar => {
        const percentage = parseInt(bar.dataset.progress, 10);
        const fill = bar.querySelector('.progress-fill-small');
        const percentText = bar.querySelector('.progress-percent-small');

        if (fill && percentText) {
            fill.style.width = `${percentage}%`;
            percentText.textContent = `${percentage}%`;
        }
    });
});
