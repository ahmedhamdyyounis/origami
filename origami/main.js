// Start Toggle Menu

let bars = document.querySelector("#bars")
let menu = document.getElementById("menu")
let menuItems = document.getElementById("menu-items")
let xBtn = document.getElementById("x-btn")
let transparent = document.getElementById("transparent-layer")

// 
bars.addEventListener('click', openMenu ) 

xBtn.onclick = closeMenu
transparent.addEventListener('click', closeMenu)

// Hide Menu CSS styling
function closeMenu() {
    menu.style.visibility = "hidden"
    menu.style.opacity = "0"
    menuItems.style.left = "-329px"
}

function openMenu() {
        menu.style.left = "0"
        menu.style.visibility = "visible"
        menu.style.opacity = "1"
        menuItems.style.left = "0"
    
} 

// End Toggle Menu

