
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 100,
        height: 50
    }
}

// либо так
const rect2 = {} as Rect
// либо так
const rect3 = <Rect>{}


interface RectWithArea extends Rect{
    // добавим метод который будет считать площать
    getArea: () => number

}


const rect4: RectWithArea = {
    id: '123',
    size: {
        width: 50,
        height: 30
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}


interface IClock {
    // свойство time c типом Date
    time: Date
    // метод setTime который ничего не возвращает (void - значит ничего)
    // и этот же метод принимает в качестве аргумента date c типом Date
    setTime(date: Date): void 
}


class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void{
        this.time = date;
    }
}


interface Styles {
    [key:string]: string

}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '2px'
}