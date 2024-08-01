const e1 = document.querySelector("#e1");
const e2 = document.querySelector("#e2");
const e3 = document.querySelector("#e3");
const e4 = document.querySelector("#e4");
const e5 = document.querySelector("#e5");
const e6 = document.querySelector("#e6");
const e7 = document.querySelector("#e7");
const e8 = document.querySelector("#e8");
const e9 = document.querySelector("#e9");
const close = document.getElementById("close");
const pgDiv = document.getElementById("pg");
const nb =  document.getElementById("navbar");

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

    toggleButton.addEventListener("click", function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") ? "block" : "none";
        toggleButton.style.display = "none";
        closeButton.style.display = "block";
        
    });

    closeButton.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
        toggleButton.style.display = "block";
        closeButton.style.display = "none";
    });

    console.log("Developed by: Adithya B R");
});

function redirectToRegistration() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfvg90PtO9LT3RGCjHrO33Qi2MTUvstxZZW6Rbs5xxePeqDsQ/viewform";
}

function displaytoggle(item) {
    var element = document.getElementById(item);
    element.style.display = 'flex';
}

function hide() {
    for (let i = 1; i <= 10; i++) {
        let element = document.getElementById('e' + i);

        element.style.display = 'none';
    }
}