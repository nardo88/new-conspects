//цепляем событие на onclick кнопки
const button = document.querySelectorAll('.copy');
const text = document.querySelectorAll('.text');



button.forEach((item, i) => {
    item.addEventListener('click', () => {
        navigator.clipboard.writeText(text[i].value)
        item.classList.add('copy--active');

        setTimeout(() => {
            item.classList.remove('copy--active');
        }, 2000)
    })
})