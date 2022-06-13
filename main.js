

var navigation = document.getElementById('navigation');
var showNavOnScroll = document.getElementById('showNaveOnScroll');
var showBackToTopButtonOnScroll = document.getElementById('showBackToTopButtonOnScroll');

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}
function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}
function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}
ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1400,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`)
//   #contact .content n funciona depois rever
//pode usar o '' no .reveal(`#home, #home img, #home .stats, #home #services`)
// porém para poder realizar quebras de linhas só pode com o `` template strings
// boa prática usando o camelCase: usando classList ao invés
// class list, o espaço é substituido pela letra maiuscula
// de "L"ista de classLista o mesmo com: onScroll, openMenu, closeMenu