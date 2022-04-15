
// импортируем класс из events
const EventEmiter = require('events').EventEmitter
// создаем экземпляр класса
const emiter = new EventEmiter()
// создаем слушатель на кастомное событие
emiter.on('myEvent', (arg) => {
    console.log(arg)
})










