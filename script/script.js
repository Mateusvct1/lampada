let lampadaLigada = document.getElementById('Ligada')
let lampadaDesligar = document.getElementById('Desligar')
let lampada = document.getElementById('lampada')

function Ligada() {

    lampada.src = 'imagens/lampadaAcessa.jpg';

}
lampadaLigada.addEventListener('click', Ligada);

function Desligar() {

    lampada.src = './imagens/lampadaApagada.jpg';

}

lampadaDesligar.addEventListener('click', Desligar);
lampada.addEventListener('mouseover', Ligada);
lampada.addEventListener('mouseleave', Desligar);
