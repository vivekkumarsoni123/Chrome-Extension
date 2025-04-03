(function() {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

    let media = document.querySelectorAll("video, img, picture");

    media.forEach((mediaItem) => {
        // Apply the inverse filter to cancel out the inherited effect
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    });
})();