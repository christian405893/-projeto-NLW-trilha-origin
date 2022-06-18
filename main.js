window.addEventListener('scroll', onScroll )
// vai executar a função que ta ouvindo a função "onScroll" e vai adicionar a classe 'scroll'
var navigation = document.getElementById('navigation')
onScroll()
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
    console.log(scrollY) 
    //e vai no console.log do devtools para saber o numero do scroll do mouse
    if (scrollY > 730) {
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
// função para fazer o menu sumir selecionando o x

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
  #services .card,
  #about,
  #about header,
  #about .content`)
//   #contact .content n funciona depois rever
//pode usar o '' no .reveal(`#home, #home img, #home .stats, #home #services`)
// porém para poder realizar quebras de linhas só pode com o `` template strings
// boa prática usando o camelCase: usando classList ao invés
// class list, o espaço é substituido pela letra maiuscula
// de "L"ista de classLista o mesmo com: onScroll, openMenu, closeMenu
