document.addEventListener('DOMContentLoaded', () => {
    const accordionItem = document.querySelectorAll('.notifications__item');
    const accordionItemHead = document.querySelectorAll('.notifications__item-head');

    accordionItem.forEach(el => {
        accordionItemHead.addEventListener('click', () => {
            el.classList.toggle('notifications__item--active');
        });
    });
});
