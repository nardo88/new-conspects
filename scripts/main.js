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

        const secondHide = () => {
            mainMenuWrapper.forEach(item => {
                item.style.maxHeight = '0px';
                item.classList.remove('active');
            })
        }


   

  

























        document.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.burger')) {
                navBarBody.classList.toggle('nav-bar__body--open')
                overlay.classList.toggle('overlay--open')
            }

            if (target.dataset.path) {
                const mainListSubItem = document.querySelectorAll('.main-list__sub-item')

                mainListSubItem.forEach(item => {
                    item.classList.remove('main-list__sub-item--active')
                    if (item === target) {
                        target.classList.add('main-list__sub-item--active')
                    }
                })

                iframe.src = target.dataset.path;
                closeMenu();
            }

            if (target.classList.contains('overlay')) {
                closeMenu();
            }



            if (target.classList.contains('main-list__item-title')) {
                const mainMenuItem = document.querySelectorAll('.main-list__item-title');
                const mainMenuWrapper = document.querySelectorAll('.main-list__wrapper');

                mainMenuItem.forEach((item, i) => {
                    item.classList.remove('main-list__item-title--active');
                    if (target === item) {
                        if (mainMenuWrapper[i].classList.contains('active')) {
                            item.classList.remove('main-list__item-title--active');

                            mainMenuWrapper.forEach(elem => {
                                elem.style.maxHeight = '0px';
                                elem.classList.remove('active');
                            })
                        } else {

                            mainMenuWrapper.forEach(a => {
                                a.style.maxHeight = '0px';
                                a.classList.remove('active');
                            })

                            mainMenuWrapper[i].classList.add('active')
                            mainMenuWrapper[i].style.maxHeight = mainMenuWrapper[i].children[0].clientHeight + 'px';

                            item.classList.add('main-list__item-title--active');
                        }
                    }
                })
            }
        })
    }
    menu()



})