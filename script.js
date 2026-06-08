// script.js — Páginas Web
// Resalta el enlace del menú según la sección visible al hacer scroll

const secciones = document.querySelectorAll('section[id]');
const enlaces   = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let actual = '';

    secciones.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 80) {
            actual = sec.id;
        }
    });

    enlaces.forEach(a => {
        a.style.backgroundColor = '';
        if (a.getAttribute('href') === '#' + actual) {
            a.style.backgroundColor = 'rgba(46,187,104,0.3)';
        }
    });
});
