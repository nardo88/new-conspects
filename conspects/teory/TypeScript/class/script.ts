

class TypeScript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}


class Car {
    // свойство которое будет доступно только для чтения
    readonly model: string
    // такое же свойство но у которого задано значение по умолчанию
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        // свойство model мы можем записать только в конструкторе
        // в методах мы его переписать не сможем
        this.model = theModel
    }
}


class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }
}

// Абстрактный класс который описывает два метода
abstract class Component {
    // метод ничего не возвращает 
    abstract render(): void
    // метод возвращает строку
    abstract info(): string
}

// создаем класс который наследуется от абстрактного
class AppComponent extends Component {
    // описываем эти два метода с уже логикой
    render(): void {
        console.log('component on render')
    }

    info(): string {
        return 'JSX'
    }
}