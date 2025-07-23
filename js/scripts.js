/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Navbar shrink function
    var navbarShrink = function () {
        var navbarCollapse = function () {
            if ($("#sideNav").offset().top > 100) { // Check if scrolled down enough (example)
                // Add any shrink classes if needed, original template uses it for top nav
            } else {
                // Remove shrink classes
            }
        };
        // Shrink the navbar
        navbarCollapse();
        $(window).scroll(navbarCollapse);
    };

    // Shrink the navbar when page is scrolled
    navbarShrink();

})(jQuery); // End of use strict

// --- Progress Bar Logic (Integrated from progress-bar.js) ---
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
            // Also explicitly set background-color here to ensure it's applied,
            // as inline styles have higher specificity than external stylesheets
            fill.style.backgroundColor = 'var(--green)'; // Use CSS variable for color

            percentText.textContent = `${progress}%`;
            console.log(`PROGRESS_BAR_DEBUG: Successfully updated percentage text for bar ${index + 1}.`);
        } else {
            console.warn(`PROGRESS_BAR_DEBUG: Skipping bar ${index + 1} due to missing elements or data. Fill: ${fill}, PercentText: ${percentText}, Progress: ${progress}`);
        }
    });

    // Optional: Add intersection observer for animation on scroll if desired
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
