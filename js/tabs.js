let area = document.querySelector('.product__prop');
let buttons = area.querySelectorAll('.product__btn');
let tabItem = area.querySelectorAll('.tab-item');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        for (let j = 0; j < buttons.length; j++) {
            if (j === i) {
                buttons[j].classList.add('product__btn--active');
                tabItem[j].classList.add('tab-item--active');
            } else {
                buttons[j].classList.remove('product__btn--active');
                tabItem[j].classList.remove('tab-item--active');
            }
        }
    });
}