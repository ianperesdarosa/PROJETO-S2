const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currenTarget.setAttribute('area-expanded','true');
    if (active) {
        event.currenTarget.setAttribute('aria-label','Fechar menu');
} 
    else{
    event.currenTarget.setAttribute('aria-label','Abrir menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
