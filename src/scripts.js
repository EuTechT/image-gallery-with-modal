let images = window.document.querySelectorAll('.small-img');
let modal = window.document.querySelector('.modal');
let imgModal = window.document.querySelector('#img-modal');
let btnClose = window.document.querySelector('#btn-close');

images.forEach(
    (image) => {
        image.addEventListener('click', () => {
            modal.classList.toggle('modal--active');
            changeImage(image.getAttribute('src'), image.getAttribute('alt'));
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

function closeModal(event) {
    if(event.key == "Escape") {
        modal.classList.remove('modal--active');
    }
}

window.onkeydown = closeModal;