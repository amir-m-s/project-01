let menu_icon = document.querySelector("#menu-icon");
let menu = document.querySelector(".header > nav > ul");

let is_menu_open = false;

function open_menu(event) {
    if (!is_menu_open) {
        menu.style.display = "block";
        is_menu_open = true;
    } else {
        menu.style.display = "none";
        is_menu_open = false;
    }    
}

menu_icon.addEventListener("click", open_menu);
