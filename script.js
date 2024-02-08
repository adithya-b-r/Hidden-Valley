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
    const toggleButton = document.getElementById("toggle1");
    const closeButton = document.getElementById("toggle2");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const navbarItems = document.querySelectorAll(".dropdown-menu a");
});
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
