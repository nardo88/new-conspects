import main from './main.js';
import teory from './teory.js';
import practice from './practice.js';

document.addEventListener('DOMContentLoaded', () => {

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



    //  RENDER ==================================================
    // main
    const mainContainer = document.getElementById('main');

    main.forEach(item => {
        const li = document.createElement('li')
        li.classList.add('second__item');
        li.innerHTML = `<div data-path="${item.path}" class="second__title link-item">${item.title}</div>`;

        mainContainer.insertAdjacentElement('beforeend', li);
    })



    // teory
    const teoryContainer = document.getElementById('teory');
    for (let key in teory) {
        const li = document.createElement('li');
        li.classList.add('second__item');

        li.innerHTML = `
                <div class="second__title "><span>${key.toUpperCase()}</span> <svg class="icon"> <use xlink:href="#arrow"></use> </svg></div>
                <div class="second__body">
                    
                    <ul class="third">
                        ${teory[key].map(item => `<li class="third__item"><div data-path="${item.path}" class="third__title link-item">${item.title}</div></li>`).join(' ')}
                    </ul>

                </div>
            `

        teoryContainer.insertAdjacentElement('beforeend', li)
    }

    // practice
    const practiceContainer = document.getElementById('practice');
    for (let key in practice) {
        const li = document.createElement('li');
        li.classList.add('second__item');

        li.innerHTML = `
                <div class="second__title "><span>${key.toUpperCase()}</span> <svg class="icon"> <use xlink:href="#arrow"></use> </svg></div>
                <div class="second__body">
                    
                    <ul class="third">
                        ${practice[key].map(item => `<li class="third__item"><div data-path="${item.path}" class="third__title link-item">${item.title}</div></li>`).join(' ')}
                    </ul>

                </div>
            `

        practiceContainer.insertAdjacentElement('beforeend', li)
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

    secondTitle.forEach((item, i) => {
        item.addEventListener('click', e => {
            let height = null;
            const body = item.nextElementSibling;
            if (body) {
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
                const parentHeight = parent.children[0].clientHeight;
                parent.style.maxHeight = `${parentHeight + height}px`;
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
                if (item === target) {
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



})