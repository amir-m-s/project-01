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

// Go to top button variable
const go_top = document.querySelector(".go-up");

go_top.addEventListener("click", () => {
    window.scrollTo({top: 0});
});

// Nav items change state script
const sections = [
    document.querySelector("#home"),
    document.querySelector("#education"),
    document.querySelector("#skills"),
    document.querySelector("#about"),
    document.querySelector("#contact"),
]

const li = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
    for (let i = 0; i < sections.length; i++) {
        let section_top = sections[i].getBoundingClientRect().top;
        let sections_bottom = sections[i].getBoundingClientRect().bottom;
        
        if (section_top <= 0 && sections_bottom >= window.innerHeight){
            // Add active class on relative nav item
            li[i].classList.add("active");        

            // Remove other nav items active class
            for (let j=0; j < li.length; j++){
                if (j!=i) {
                    li[j].classList.remove("active");
                }
            } 
        }
    }
    
});

window.onscroll = () => {
    for (let i = 0; i < sections.length; i++) {
        let section_top = sections[i].getBoundingClientRect().top;
        let sections_bottom = sections[i].getBoundingClientRect().bottom;
        
        if (section_top <= 0 && sections_bottom >= window.innerHeight){
            // Add active class on relative nav item
            li[i].classList.add("active");        

            // Remove other nav items active class
            for (let j=0; j < li.length; j++){
                if (j!=i) {
                    li[j].classList.remove("active");
                }
            } 
        }
    }
}