function toggleTheme() {
    let body = document.querySelector("body");
    body.classList.add("dark-mode");
}

let button = document.getElementById("toggleButton");
button.onclick = toggleTheme;