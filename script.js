window.onhashchange = function() {
    console.log('Hash changed!');

    // Get the viewport dimensions
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// Log the viewport dimensions
console.log("Viewport width: " + viewportWidth + "px");
console.log("Viewport height: " + viewportHeight + "px");

}

