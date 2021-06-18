document.addEventListener('DOMContentLoaded', () => {


    const data = {
        main: [
                {title: 'Настройка VS Code', path: '', target: ''},
                {title: 'Нарезка иконок из PSD макета', path: '', target: ''},
            ],
        teory: {},
        practice: {},
        plugins: {},
        english: {}
    
    }



    const menu = () => {
        const navBar = document.querySelector('.nav-bar');
        const navBarBody = document.querySelector('.nav-bar__body');
        const mainListMenu = document.querySelector('.main-list');


        navBar.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.burger')){
                navBarBody.classList.toggle('nav-bar__body--open')
            }




           
        })


        // рендер главного меню
        const renderMainMenu = (data) => {
            // постойка верхнего уровня меню
            for(let key in data){
                const li = document.createElement('li');
                li.classList.add('main-list__item');
                li.setAttribute('data-type', key)
                li.insertAdjacentHTML('afterbegin', `
                   <div class="main-list__item-title">${key}</div>
                   <div class="main-list__body"></div>
                   
                `)
                mainListMenu.insertAdjacentElement('beforeend', li);
            }
        }

        const renderMainSection = (data) => {
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.title;

                const parent = mainListMenu.querySelector('.main-list__body')
                parent.insertAdjacentElement('beforeend', li)
            })
        }

        renderMainMenu(data)

        renderMainSection(data.main)
    }

    menu();
})



