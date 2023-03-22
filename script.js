
var toggle = document.getElementById('container');
var body = document.querySelector('body');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');

}

function languageChange(lang) {
    if (lang == "es") {
        location.href = "./index.html";
    } else if (lang == "en") {
        location.href = "./index-en.html";
    }
}
    
function languageChange_project(lang) {
    if (lang == "es") {
        location.href = "./proyectos.html";
    } else if (lang == "en") {
        location.href = "./projects.html";
    }
}