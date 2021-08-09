// family meme
const audio = new Audio;
audio.src = "family.mp3";


window.addEventListener('scroll',function() {
    let navbar = document.querySelector('.navbar');
    let home = document.querySelector('.home');

    navbar.classList.toggle('scrolled-nav', window.scrollY > 20);
    home.classList.toggle('scrolled-home', window.scrollY > 1800);

});