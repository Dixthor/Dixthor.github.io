document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
document.getElementById("background_menu").addEventListener("click", ocultar_menu);
nav = document.getElementById("navegacion");
background = document.getElementById("background_menu")

function mostrar_menu() {
    nav.style.display = "block";
    background.style.display = "block";    
}

function ocultar_menu() {
    nav.style.display = "none";
    background.style.display = "none";
    
}