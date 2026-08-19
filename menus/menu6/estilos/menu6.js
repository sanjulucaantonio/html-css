const menu= document.querySelector('#menu');

const btnAbrir= document.querySelector('#btn-abrir');

const btnFechar= document.querySelector('#btn-fechar');

const overlay = document.querySelector('#overlay');

function abrirMenu(){
    menu.classList.add('aberto');
    overlay.classList.add('aberto')
}

function fecharMenu(){
    menu.classList.remove('aberto')
    overlay.classList.remove('aberto')
}

btnAbrir.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu)