 const menu=document.querySelector('#menu');
 const overlay= document.querySelector('#overlay');
 const botaoMenu=document.querySelector('#botao-menu');
function abrirMenu(){
    menu.classList.add('aberto');
    overlay.classList.add('aberto');
  
    botaoMenu.style.display= 'none';
}

function fecharMenu(){
    menu.classList.remove('aberto');
    overlay.classList.remove('aberto')

    botaoMenu.style.display='block';
}