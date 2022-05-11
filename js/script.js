let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
};
window.onscroll = function(){
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
};