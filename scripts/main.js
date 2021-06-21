import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    const menu = () => {
        const navBarBody = document.querySelector('.nav-bar__body');
        const iframe = document.querySelector('.iframe');
        const overlay = document.querySelector('.overlay');


        const closeMenu = () => {
            navBarBody.classList.remove('nav-bar__body--open');
            overlay.classList.remove('overlay--open')


        }

        const secondHide = (data) => {
            data.forEach(item => {
                item.style.maxHeight = '0px';
                item.classList.remove('active');
            })
        }

        const toggleClass = (elem, className) => {
            if (elem.classList.contains(className)) {
                elem.classList.remove(className)
            } else {
                elem.classList.add(className)

            }
        }





























        document.addEventListener('click', e => {
           
            const target = e.target;

            if (target.closest('.burger')) {
                navBarBody.classList.toggle('nav-bar__body--open')
                overlay.classList.toggle('overlay--open')
            }

            if (target.dataset.path) {
                iframe.src = target.dataset.path;
                closeMenu();

            }

            if (target.classList.contains('overlay')) {
                closeMenu();
            }


            // Клик по вкладке второго уровня
            if (target.closest('.second__item')) {
                const trg = e.target.closest('.second__item');
                if (trg.dataset.type) {
                    const secondItem = document.querySelectorAll('[data-type="second"]');
                    const secondBody = document.querySelectorAll('.second__body');

                    secondItem.forEach((item, i) => {
                        item.classList.remove('second__item--open')
                        if (item === trg) {
                            toggleClass(item, 'second__item--open')
                            if (secondBody[i].classList.contains('active')) {
                                item.classList.remove('second__item--open')
                                secondHide(secondBody);
                            } else {
                                secondHide(secondBody);
                                secondBody[i].classList.add('active');
                                secondBody[i].style.maxHeight = secondBody[i].children[0].clientHeight + 'px'
                            }
                        }
                    })
                }
            }

            // клик по вкладке первого уровня
            if (target.closest('.first__item')) {
                const trg = e.target.closest('.first__item');
                if (trg.dataset.type === 'first') {
                    const firstItem = document.querySelectorAll('[data-type="first"]');
                    const firstBody = document.querySelectorAll('.first__body');

                    firstItem.forEach((item, i) => {
                        item.classList.remove('first__item--open')
                        if (item === trg) {
                            toggleClass(item, 'first__item--open')
                            if (firstBody[i].classList.contains('active')) {
                                item.classList.remove('first__item--open')
                                secondHide(firstBody);
                            } else {
                                secondHide(firstBody);
                                firstBody[i].classList.add('active');
                                firstBody[i].style.maxHeight = firstBody[i].children[0].clientHeight + 'px'
                            }
                        }
                    })
                }
            }



        })
    }
    menu()



})