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

        const addActiveClass = (data, i, className) => {
            data.forEach((item, ind) => {
                item.classList.remove(className)
                if (ind === i) {
                    item.classList.add(className)

                }
            })
        }









        // клик по первому уровню меню
        const firstTitle = document.querySelectorAll('.first__title');
        const firstBody = document.querySelectorAll('.first__body');
        const firstItem = document.querySelectorAll('.first__item');

        firstTitle.forEach((item, i) => {
            item.addEventListener('click', e => {
                const body = item.nextElementSibling;
                const height = body.children[0].clientHeight;

                if (body.classList.contains('active')) {
                    secondHide(firstBody)
                    addActiveClass(firstItem, null, 'first__item--open')

                } else {
                    secondHide(firstBody)
                    body.classList.add('active');
                    body.style.maxHeight = `${height}px`
                    addActiveClass(firstItem, i, 'first__item--open')
                }
            })
        })

        // клик по второму уровню меню
        const secondTitle = document.querySelectorAll('.second__title');
        const secondBody = document.querySelectorAll('.second__body');
        const secondItem = document.querySelectorAll('.second__item');
        async function openSecondMenu() {

        }
        secondTitle.forEach((item, i) => {
            item.addEventListener('click', () => {
                let height = ''
                const body = item.nextElementSibling;
                if (body){
                    height = body.children[0].clientHeight;

                } else {
                    return
                }

                if (body.classList.contains('active')) {
                    secondHide(secondBody)
                    addActiveClass(secondItem, null, 'second__item--open')

                } else {

                    secondHide(secondBody)
                    body.classList.add('active');
                    body.style.maxHeight = `${height}px`
                    addActiveClass(secondItem, i, 'second__item--open');
                    const parent = item.parentElement.parentElement.parentElement;
                    const parentHeight = parent.children[0].offsetHeight;
                    parent.style.maxHeight = `${parentHeight+height}px`;
                }
            })
        })





















        document.addEventListener('click', e => {

            const target = e.target;

            if (target.closest('.burger')) {
                navBarBody.classList.toggle('nav-bar__body--open')
                overlay.classList.toggle('overlay--open')
            }

            if (target.dataset.path) {
                const linkItem = document.querySelectorAll('.link-item');

                linkItem.forEach(item => {
                    item.classList.remove('link-item--active');

                    if (item === target){
                        item.classList.add('link-item--active');

                    }
                })

                iframe.src = target.dataset.path;
                closeMenu();

                

            }

            if (target.classList.contains('overlay')) {
                closeMenu();
            }

        })
    }
    menu()



})