//Configurando animacao
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//imagens
const pedras = document.querySelector('.pedras');
const circ = document.querySelector('.circ');
const diabo = document.querySelector('.diabo');
const cara = document.querySelector('.cara');

//animacao ao entrar
container.addEventListener('mouseenter', e =>{
card.style.transition = 'none';
cara.style.transform = ' translateZ(165px)';
diabo.style.transform = ' translateZ(150px)';
pedras.style.transform = ' translateZ(100px)';
circ.style.transform = ' translateZ(70px)';
});
//animacao ao sair
container.addEventListener('mouseleave', e =>{
card.style.transition = 'all 0.5s ease';
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
cara.style.transform = 'translateZ(0px)';
diabo.style.transform = 'translateZ(0px)';
pedras.style.transform = 'translateZ(0px)';
circ.style.transform = 'translateZ(0px)';
});
//animacao movendo
container.addEventListener('mousemove',(e) =>{    
    let xAxis = (window.innerWidth / 2 - e.pageX )/50;
    let yAxis = (window.innerHeight / 2 - e.pageY)/50;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });