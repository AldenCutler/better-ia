console.clear();

var style = document.createElement("style");
fetch(chrome.runtime.getURL("userContent.css"))
.then((response) => response.text())
.then((data) => {
    // inject userContent.css to the page
    style.innerHTML = data;
    document.head.appendChild(style);
    
    // remove the original stylesheet.css
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.includes("stylesheet.css")) {
            links[i].parentNode.removeChild(links[i]);
        }
    }
    
    // if we're on the main page, replace iframe with div containing iframe.html
    if (window.location.href == "https://ia.wpi.edu/cs3013-andrews/") {
        var iframe = document.querySelector("iframe");
        iframe.src = chrome.runtime.getURL("iframe.html");
        iframe.style.width = "90%";
        iframe.width = "90%";
    } else if (window.location.href.includes("https://ia.wpi.edu/cs3013-andrews/forum.php?page=")){
        // if we're on the forum page, replace text color in table with black
        var table = document.querySelectorAll("table")[2];
        table.style.color = "black";
    }
});

console.log("BetterIA.js loaded");