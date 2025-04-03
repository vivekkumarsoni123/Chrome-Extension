const button = document.querySelector(".button");
const circle = document.querySelector(".circle");

let buttonClicked = false;

button.addEventListener("click", () => {
    buttonClicked = !buttonClicked;

    button.style.animation = buttonClicked ? "transformtoblue 1s forwards" : "transformtoyellow 1s forwards";
    circle.style.animation = buttonClicked ? "movecircleRight 1s forwards" : "movecircleLeft 1s forwards";

    // Send a message to the background script to inject the appropriate script
    const scriptFile = buttonClicked ? "appon.js" : "appoff.js";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: [scriptFile]
        }, () => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            } else {
                console.log(`${scriptFile} injected successfully.`);
            }
        });
    });
});
