// content.js

window.onload = function() {
    var currentURL = window.location.href;
    if (currentURL.match("https://www.google.com")) {
        window.location.replace("https://duckduckgo.com");
    }
};
