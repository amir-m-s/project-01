// To always have active state on navbar
window.addEventListener("DOMContentLoaded", scroll_handler);

let menu_icon = document.querySelector("#menu-icon");
let menu = document.querySelector("nav ul");

menu_icon.addEventListener("click", toggle_menu);

function toggle_menu() {
    let menu_display = getComputedStyle(menu).display;
    if (menu_display == "none") {
        menu.style.animation = "ease-in-out";
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
        tools.style.display = "none";
    }
}

window.addEventListener("resize", () => {
    let width = window.innerWidth;
    if (width > 770)
        menu.style.display = "flex";
    else
        menu.style.display = "none";
});

// Go to top button variable
const go_top = document.querySelector(".go-up");

go_top.addEventListener("click", () => {
    window.scrollTo({top: 0});
});

// Nav items change state script
const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll("nav a");

function scroll_handler() {
    const scrolled = window.scrollY;

    sections.forEach(section => {
        const distance_top = section.offsetTop;

        // Checks if content is on the viewport
        if (scrolled >= distance_top && scrolled <= distance_top + section.clientHeight) {

            nav_links.forEach(link => {

                // Checks if the href = id then active related link and make sure other links doesn't have
                // active class on them!
                if(link.getAttribute("href") === `#${section.getAttribute("id")}`)
                    link.classList.add("active");
                else
                    link.classList.remove("active");

            });

        }

    });

}

window.addEventListener("scroll", scroll_handler);
