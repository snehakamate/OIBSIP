// Function to handle form submission or action button click
function handleActionButtonClick() {
    alert("Action button clicked! This can trigger further actions like navigating or showing a modal.");
}

// Function to dynamically change content
function updateFeatureText() {
    const features = document.querySelectorAll('.feature p');
    features.forEach((feature, index) => {
        feature.textContent = `Updated content for feature ${index + 1}!`;
    });
}

// Example of how you could toggle a class
function toggleClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle("highlight");
}

// Add event listener to button on the page
document.getElementById('action-btn').addEventListener('click', handleActionButtonClick);

// Call function on page load to update feature text
document.addEventListener('DOMContentLoaded', updateFeatureText);
