const bottomElem = document.querySelector('.bottom')

const toggle = () => {
    if(bottomElem.offsetHeight === 0){
        bottomElem.style.maxHeight = bottomElem.children[0].offsetHeight + 'px'
    } else {
        bottomElem.style.maxHeight = 0
    }
}

document.querySelector('.wrapper').addEventListener('click', toggle)

