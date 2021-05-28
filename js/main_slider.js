var pictures = [
    'img/content/p1.png',
    'img/content/p2.png',
    'img/content/p3.png',
    'img/content/p4.png',
    'img/content/p5.svg'
];

let preview = document.querySelectorAll('.product__preview');
let full = document.querySelector('.product__full-img');

for (let i = 0; i < preview.length; i++) {
    preview[i].addEventListener('click', function () {
        full.src = pictures[i];
        for (let j = 0; j < preview.length; j++) {
            if (j === i) {
                preview[j].classList.add('product__preview--active');
            } else {
                preview[j].classList.remove('product__preview--active');
            }
        }
    });
}

let btnsArea = document.querySelector('.product__slider');
let arrows = btnsArea.querySelectorAll('.slider-arrow');
let btns = btnsArea.querySelectorAll('.product__preview');

arrows[0].onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains('product__preview--active') && i - 1 >= 0) {
            btns[i - 1].click();
        };
    };
};

arrows[1].onclick = function () {
    for (let i = btns.length - 1; i >= 0; i--) {
        if (btns[i].classList.contains('product__preview--active') && i + 1 < btns.length) {
            btns[i + 1].click();
        };
    };
};