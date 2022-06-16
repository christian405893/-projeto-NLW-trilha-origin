var navigation = document.getElementById('navigation')

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

// função para aparecer o menu navigation quando navegar
// para baixo

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

// função para aparecer o simbolo da seta pra cima quando
// o scroll chegar ser maior que 500

function showBackToTopButtonOnScroll() {
    if (scrollY > 3500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

console.log(scrollY)

// função para fazer o menu aparecer selecionando os 3 tracinhos

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

// serve para fazer a animação dos conteudo do body aparecendo

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
#srevices .card`);

//pode usar o '' no .reveal(`#home, #home img, #home .stats, #home #services`)
// porém para poder realizar quebras de linhas só pode com o `` template strings
// boa prática usando o camelCase: usando classList ao invés
// class list, o espaço é substituido pela letra maiuscula
// de "L"ista de classLista o mesmo com: onScroll, openMenu, closeMenu