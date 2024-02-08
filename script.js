// window.onhashchange = function() {
//     console.log('Hash changed!');

//     // Get the viewport dimensions
// var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// // Log the viewport dimensions
// console.log("Viewport width: " + viewportWidth + "px");
// console.log("Viewport height: " + viewportHeight + "px");

// }

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle1");
    var closeButton = document.getElementById("toggle2");
    var dropdownMenu = document.querySelector(".dropdown-menu");
    var navbarItems = document.querySelectorAll(".dropdown-menu a");

    navbarItems.forEach(function(item) {
        item.addEventListener("click", function(){
            toggleButton.style.display = "block";
            closeButton.style.display = "none";
            dropdownMenu.style.display = "none";
        });
    });

    // Add click event listener to toggle button
    toggleButton.addEventListener("click", function() {
        // Toggle visibility of the dropdown menu
        dropdownMenu.style.display = (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") ? "block" : "none";
        
        // Toggle visibility of the toggle buttons
        toggleButton.style.display = "none";
        closeButton.style.display = "block";
    });

    // Add click event listener to close button
    closeButton.addEventListener("click", function() {
        // Toggle visibility of the dropdown menu
        dropdownMenu.style.display = "none";

        // Toggle visibility of the toggle buttons
        toggleButton.style.display = "block";
        closeButton.style.display = "none";
    });
});

function redirectToRegistration() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSebxXRqXTiBYSy77rbgYlqqw99jF0buI-JC7Aat1yK45_ITjQ/viewform";
}
