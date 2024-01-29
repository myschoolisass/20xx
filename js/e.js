const themeId = localStorage.getItem("gamestyle");

// Function to apply theme
function applyTheme() {
    const themeEle = document.createElement("link");
    themeEle.rel = "stylesheet";

    if (themeId === "mainStyle") {
        themeEle.href = "./css/gamecss/default.css";
        console.log("mainstyle");
    } else if (themeId === "frozenStyle") {
        themeEle.href = "./css/gamecss/frozen.css";
        console.log("frozenstyle");
    } else {
        themeEle.href = "./css/gamecss/default.css";
        console.log("no style");
    }

    document.body.appendChild(themeEle);
}

// Apply theme first
applyTheme();