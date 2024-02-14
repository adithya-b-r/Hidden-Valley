const e1 = document.querySelector("#e1");
const e2 = document.querySelector("#e2");
const e3 = document.querySelector("#e3");
const e4 = document.querySelector("#e4");
const e5 = document.querySelector("#e5");
const e6 = document.querySelector("#e6");
const e7 = document.querySelector("#e7");
const e8 = document.querySelector("#e8");
const e9 = document.querySelector("#e9");
const close = document.getElementById("close")

document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle1");
    var closeButton = document.getElementById("toggle2");
    var dropdownMenu = document.querySelector(".dropdown-menu");
    var navbarItems = document.querySelectorAll(".dropdown-menu a");

    navbarItems.forEach(function (item) {
        item.addEventListener("click", function () {
            toggleButton.style.display = "block";
            closeButton.style.display = "none";
            dropdownMenu.style.display = "none";
        });
    });

    // Add click event listener to toggle button
    toggleButton.addEventListener("click", function () {
        // Toggle visibility of the dropdown menu
        dropdownMenu.style.display = (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") ? "block" : "none";

        // Toggle visibility of the toggle buttons
        toggleButton.style.display = "none";
        closeButton.style.display = "block";
    });

    // Add click event listener to close button
    closeButton.addEventListener("click", function () {
        // Toggle visibility of the dropdown menu
        dropdownMenu.style.display = "none";

        // Toggle visibility of the toggle buttons
        toggleButton.style.display = "block";
        closeButton.style.display = "none";
    });

    // for (let i = 1; i <= 9; i++) {
    //     let element = document.getElementById('e' + i);
    //     if (element) {
    //         element.style.display = 'none';
    //     }
    // }
});

function redirectToRegistration() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSebxXRqXTiBYSy77rbgYlqqw99jF0buI-JC7Aat1yK45_ITjQ/viewform";
}

function displaytoggle(item) {
    var element = document.getElementById(item);
    element.style.display = 'flex';
}

function hide() {
    for (let i = 1; i <= 9; i++) {
        let element = document.getElementById('e' + i);

        element.style.display = 'none';
    }
}