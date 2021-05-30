let modal = document.querySelector('#my-modal');
let wrapper = document.createElement('div');
let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let closing = () => wrapper.classList.add('wg-modal-hidden');
let blurBlocks = () => document.querySelectorAll('body > *:not(.bg-wg-modal)');

let wrap = () => { // Оборачивает модалку в фоновый div
    wrapper.classList.add('bg-wg-modal', 'wg-modal-hidden');
    modal.classList.add('wg-modal');
    modal.parentNode.insertBefore(wrapper, modal);
    wrapper.appendChild(modal);
};

wrap();

let vertCentering = () => { // Вертикально центрует модалку
    if (modal.offsetHeight < window.innerHeight) { // Только если высота вьюпорта больше высоты модалки
        modal.classList.add('verticalCentering');
    } else {
        modal.classList.remove('verticalCentering');
    };
};

let blur = () => { // Добавляет/убирает размытие
    if (!wrapper.classList.contains('wg-modal-hidden')) {
        for (let block of blurBlocks()) {
            block.classList.add('wg-modal-blur');
        };
    } else {
        for (let block of blurBlocks()) {
            block.classList.remove('wg-modal-blur');
        };
    };
};

window.onresize =  () => { // Добавляет/убирает центровку только при активной модалке
    if (!wrapper.classList.contains('wg-modal-hidden')) {
        vertCentering();
    };
};

openBtn.addEventListener('click', () => { // Открывает модалку
    wrapper.classList.remove('wg-modal-hidden');
    vertCentering();
    blur();
});

closeBtn.addEventListener('click', () => { // Закрывает модалку по клику на крестик
        closing();
        blur();
});

wrapper.addEventListener('click', function(evt) { // Закрывает модалку при клике по фону
    if (evt.target == this) {
        closing();
        blur();
    };
});

document.addEventListener('keyup', (evt) => {  // Закрывает модалку при нажатии Esc
    if (evt.code === 'Escape') {
        closing();
        blur();
    };
});