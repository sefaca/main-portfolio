        // const toggle = document.getElementById('toggleDark');
        // const body = document.querySelector('body');

        // toggle.addEventListener('click', function() {
        //     this.classList.toggle('fa-solid fa-toggle-off');
        // })

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
    