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
            fill.style.backgroundColor = '#28a745'; // Set the green color here
            if (percentText) {
    percentText.textContent = `${percentage}%`;

    // Move text outside if bar too small
    if (percentage < 20) {
        percentText.classList.add('outside');
    } else {
        percentText.classList.remove('outside');
    }
}
    });
});
