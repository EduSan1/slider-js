'use strict'


const imagens = [
    {id: 1, img:"./img/angular.png"},
    {id: 2, img:"./img/vue.jpg"},
    {id: 3, img:"./img/svelte.jpg"},
    {id: 4, img:"./img/react.png"},
    {id: 5, img:"./img/svelte.jpg"},
    {id: 6, img:"./img/react.png"},
    {id: 7, img:"https://i.ytimg.com/vi/g90osjOgPx0/maxresdefault.jpg"},
    {id: 8, img:"https://i.pinimg.com/originals/e8/85/c0/e885c0beb717e164ca92bd432c68d4ff.jpg"},
    {id: 9, img:"./img/svelte.jpg"},
    {id: 10, img:"./img/react.png"},
    {id: 11, img:"./img/svelte.jpg"},
    {id: 12, img:"https://i.pinimg.com/originals/c0/53/04/c053046c22839816e4a70a65543babc7.png"},
    {id: 13, img:"./img/svelte.jpg"},
    {id: 14, img:"./img/react.png"}
]

const criarSlide = (imagens) => {
    // <div class="slider-item">
    // <img src="./img/angular.png" alt="">
    // </div>
    const slider = document.querySelector('.slider');
    const anteriorButton = document.createElement('span');
    anteriorButton.classList.add('slider-button');
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo;'

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-conteudo');

    const slides = imagens.map(item => `
    <div class="slider-item">
                        <img src="${item.img}" alt="">
                    </div>
    `)

    sliderContainer.innerHTML = slides.join("")

    const proximoButton = document.createElement('span');
    proximoButton.classList.add('slider-button');
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo;'


    slider.appendChild(anteriorButton)
    slider.appendChild(sliderContainer)
    slider.appendChild(proximoButton)
    




}
criarSlide(imagens);

const sliderItemContainer = document.querySelector('.slider-conteudo');
let sliderItens = document.querySelectorAll('.slider-item');

const proximoItem = () => {

    const primeiroItem = sliderItens[0];
    sliderItemContainer.appendChild(primeiroItem)
    sliderItens = document.querySelectorAll('.slider-item');
};



const anteriorItem = () => {

    const ultimoItem = sliderItens[sliderItens.length -1];
    sliderItemContainer.prepend(ultimoItem)
    sliderItens = document.querySelectorAll('.slider-item');

};
document.getElementById('proximo').addEventListener('click',proximoItem);
document.getElementById('anterior').addEventListener('click',anteriorItem);