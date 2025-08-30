document.addEventListener('DOMContentLoaded', () => {
    const progressBarsSmall = document.querySelectorAll('.progress-bar-small');
    progressBarsSmall.forEach(bar => {
        const percentage = bar.getAttribute('data-progress');
        const fill = bar.querySelector('.progress-fill-small');
        const percentText = bar.querySelector('.progress-percent-small');

        if (fill && percentText) {
            fill.style.width = `${percentage}%`;
            fill.style.backgroundColor = '#28a745'; // Ensure JS also sets green
            percentText.textContent = `${percentage}%`;
        }
    });
});
