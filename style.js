// Function to handle intersection observer callback
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Add animation class
        } else {
            entry.target.classList.remove('visible'); // Remove class to re-trigger animation
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Select all elements that should animate
const animatedElements = document.querySelectorAll('.skill, nav ul li a');

// Observe each element to apply the animation repeatedly
animatedElements.forEach(element => {
    observer.observe(element);
});

// Ensure CSS for animations is properly applied
const style = document.createElement('style');
style.innerHTML = `
    .skill, nav ul li a {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }

    .skill.visible, nav ul li a.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
