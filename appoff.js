(function() {
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";

    let media = document.querySelectorAll("video, img, picture");

    media.forEach((mediaItem) => {
        // Reset the filter to its default state
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    });
})();