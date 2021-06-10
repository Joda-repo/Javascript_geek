'use strict'

const $popup = document.querySelector('#popup');
const $showPopupBtn = document.querySelector('#showPopupBtn');
const $closePopupBtn = document.querySelector('#closePopupBtn');
const $body = document.querySelector('body');

function showPopup() {
    $popup.style.display = 'block';
}

function closePopup(e) {
    if(e.type === 'click' || e.key === 'Escape') {
        $popup.style.display = 'none';
    }
}

$showPopupBtn.addEventListener('click', showPopup);
$closePopupBtn.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopup);


const images = [
    ['img/1.jpg', 'img/2.jpg', 'img/1.jpg'],
    ['img/2.jpg', 'img/1.jpg', 'img/2.jpg'],
    ['img/3.jpg', 'img/2.jpg', 'img/3.jpg'],
    ['img/2.jpg', 'img/3.jpg', 'img/2.jpg']
]

function drawGallery(images, start = 0) {
    $popup.lastChild.remove();

    const htmlIMG = images.map(function(img) {
        return `<img class="slide-img" src="${img}" />`
    }).join(' ');

    const htmlSlider = `<div id="slider">
        <button id="prv"><</button>
        <div id="slide">${htmlIMG}</div>
        <button id="nxt">></button>
    </div>`

    $popup.insertAdjacentHTML('beforeend', htmlSlider);

    initSlider($popup.querySelector('#slider'), start);
}

function initSlider($slider, start) {
    let currentSlide = start;
    const images = $slider.querySelectorAll('img');

    function nxtSlide() {
        images[currentSlide].style.display = 'none';
        currentSlide = (currentSlide === images.length - 1) ? 0 : currentSlide + 1;
        images[currentSlide].style.display = 'block';
    }

    function prvSlide() {
        images[currentSlide].style.display = 'none';
        currentSlide = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;
        images[currentSlide].style.display = 'block';
    }

    $slider.querySelector('#prv').addEventListener('click', prvSlide);
    $slider.querySelector('#nxt').addEventListener('click', nxtSlide);

    images[currentSlide].style.display = 'block';
}

function drawGalleryPreview(images) {
    const htmlIMG = images.map(function(img, idx) {
        return `<img data-idx="${idx}" class="preview-img" src="${img}" />`
    }).join(' ');

    const htmlPreview = `<div class="preview">
        ${htmlIMG}
    </div>`;

    $body.insertAdjacentHTML('beforeend', htmlPreview);

    const $preview = $body.lastChild;

    $preview.addEventListener('click', function(e) {
        drawGallery(images, e.target.getAttribute('data-idx'));
        showPopup();
    })
}

for(let img of images) {
    drawGalleryPreview(img);
}

//drawGallery(images);