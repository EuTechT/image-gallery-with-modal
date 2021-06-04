let images = window.document.querySelectorAll('.small-img');
let modal = window.document.querySelector('.modal');
let imgModal = window.document.querySelector('#img-modal');
let btnClose = window.document.querySelector('#btn-close');
let btnPrevious = window.document.querySelector('#btn-previous');
let btnNext = window.document.querySelector('#btn-next');
let currentImage = window.document.querySelector('.current-image');
let totalImages = window.document.querySelector('.total-images');

totalImages.innerHTML = images.length;

images.forEach(
    (image, i, a) => {
        image.addEventListener('click', () => {
            modal.classList.toggle('modal--active');
            changeImage(image.getAttribute('src'), image.getAttribute('alt'));
            btnPrevious.style.display = 'inline';
            btnNext.style.display = 'inline';

            currentImage.innerHTML = i + 1;
        });
    }
);

function changeImage(srcValue, altValue) {
    imgModal.setAttribute('src', srcValue);
    imgModal.setAttribute('alt', altValue);
}

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

function pressKey(event) {
    //console.log(event);
    if(event.key == "Escape") {
        modal.classList.remove('modal--active');
    }
    if(event.key == "ArrowLeft") {
        previousImg();
    }
    if(event.key == "ArrowRight"){
        nextImg();
    }
}

window.onkeydown = pressKey;

btnNext.addEventListener('click', nextImg);

function nextImg() {
    let imgModalCurrent = imgModal.src;
    btnPrevious.style.display = 'inline';

    for(let i = 0; i < images.length; i++){

        if(imgModalCurrent == images[i].src){
            let pos = i + 1;

            if(pos == images.length) {
                btnNext.style.display = 'none';
            } else {
                currentImage.innerHTML = pos + 1;
                changeImage(images[pos].getAttribute('src'), images[pos].getAttribute('alt'));
            }
        }
    }
}

btnPrevious.addEventListener('click', previousImg);

function previousImg() {
    let imgModalCurrent = imgModal.src;
    btnNext.style.display = 'inline';

    for(let i = 0; i < images.length; i++){
        if(imgModalCurrent == images[i].src){
            let pos = i - 1;

            if(pos < 0) {
                btnPrevious.style.display = 'none';
            } else {
                currentImage.innerHTML = (pos + 2) - 1;
                changeImage(images[pos].getAttribute('src'), images[pos].getAttribute('alt'));
            }
        }
    }
}