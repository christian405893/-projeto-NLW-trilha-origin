var navigation = document.getElementById('navigation');
function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
       navigation.classList.remove('scroll')
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
    distance: '30px',
    duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card`)
//pode usar o '' no .reveal(`#home, #home img, #home .stats, #home #services`)
// porém para poder realizar quebras de linhas só pode com o `` template strings
// boa prática usando o camelCase: usando classList ao invés
// class list, o espaço é substituido pela letra maiuscula
// de "L"ista de classLista o mesmo com: onScroll, openMenu, closeMenu