//seleccionar o menu
const menu = document.querySelector('#menu');
//seleccionar o botão de abrir
const btnAbrir = document.querySelector('#btn-abrir');
//seleccionar o botão de fechar
const btnFechar = document.querySelector('#btn-fechar');
//seleccionar o overlay
const overlay = document.querySelector('#overlay');
//função para abrir o meu
function abrirMenu(){
    //Adicionar a classe aberto ao menu
    menu.classList.add('aberto');
    //Mostrar o overlay
    overlay.classList.add('aberto')
}
//Função para fechar o menu
function fecharMenu(){
    //Remove a classe aberto do menu
    menu.classList.remove('aberto')
    //Esconde o overlay
    overlay.classList.remove('aberto')
}
//Quando clicar no botão humbúrger
btnAbrir.addEventListener('click', abrirMenu);
//Quando clicar no botão X
btnFechar.addEventListener('click', fecharMenu);
//Quando clicar no overlay
overlay.addEventListener('click', fecharMenu)