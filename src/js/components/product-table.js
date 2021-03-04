document.addEventListener('DOMContentLoaded', () => {
    tableBtn = document.querySelector('.product__desc-content-btn');
    tableContent = document.querySelector('.product__desc-content');

    tableBtn.addEventListener('click', () => {
        tableContent.classList.toggle('product__desc-content--active');

        if(tableBtn.querySelector('span').innerHTML == 'Показать весь список') {
            tableBtn.querySelector('span').innerHTML = 'Свернуть список';
        } else if(tableBtn.querySelector('span').innerHTML == 'Свернуть список') {
            tableBtn.querySelector('span').innerHTML = 'Показать весь список';
        }
    });
});