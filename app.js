let modes = document.getElementById('modes');
let mainPage = document.getElementById('main-page');
let body = document.getElementById('body');

let icon = document.getElementById('darkMode');
icon.onclick = ()=>{
    icon.classList.toggle('bx-toggle-right')
    body.classList.toggle('darkMode');
}


