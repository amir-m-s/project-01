let menu_icon = document.querySelector("#menu-icon");
let menu = document.querySelector(".header > nav > ul");

function toggle_menu() {
    let menu_display = getComputedStyle(menu).display;
    if (menu_display == "none") {
        menu.style.animation = "ease-in-out";
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
        tools.style.display = "none";
    }
}