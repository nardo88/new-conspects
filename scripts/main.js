document.addEventListener('DOMContentLoaded', () => {


    const data = {
        main: [{
                title: 'Настройка VS Code',
                path: './conspects/main/vs_code/vs_code.html',
                target: ''
            },
            {
                title: 'Нарезка иконок из PSD макета',
                path: '/conspects/main/Icon_from_psd/Icon_from_psd.html',
                target: ''
            },
        ],
        teory: {},
        practice: {},
        plugins: {},
        english: {}

    }



    const menu = () => {
        const navBarBody = document.querySelector('.nav-bar__body');
        const mainListMenu = document.querySelector('.main-list');
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


        // рендер главного меню
        const renderMainMenu = (data) => {
            // постойка верхнего уровня меню
            for (let key in data) {
                const li = document.createElement('li');
                li.classList.add('main-list__item');
                li.setAttribute('data-type', key)
                li.insertAdjacentHTML('afterbegin', `
                   <div class="main-list__item-title">${key}</div>
                   <div class="main-list__wrapper">
                    <ul class="main-list__body"></ul>
                   </div>
                   
                   
                `)
                mainListMenu.insertAdjacentElement('beforeend', li);
            }
        }

        const renderMainSection = (data) => {
            data.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('main-list__sub-item')
                li.textContent = item.title;
                li.setAttribute('data-path', item.path)

                const parent = mainListMenu.querySelector('.main-list__body')
                parent.insertAdjacentElement('beforeend', li)
            })
        }

        renderMainMenu(data)

        renderMainSection(data.main)


















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


                       }  else {

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