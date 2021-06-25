
const isLoading: boolean = true

const int: number = 42

const float: number = 4.2

const str: string = 'hello'

const arrayNumber: Array<number> = [1,1,2,3,5,8,13]

const arrayString: string[] = ['hello', 'typescript']

const contact: [string, number] = ['Maxim', 9035259226]


let variable: any = 42
variable = 'string'


function sayMyName(name: string): void {
    console.log(name);
}



// тип объекта с адресом
type AdressType = {
    country: string
    city: string
}

// тип объекта user
type UserType = {
    name: string
    // функция имеет входной параметр, но ничего не возвращает
    seyHi: (str: string) => void
    age: number
    adress: AdressType | null
}

// Валидный объект который соответствует типу
// если убрать какое-либо свойство, TS отругается
const user: UserType = {
    name: "Max",
    seyHi(str){
        console.log(str);
    },
    age: 32,
    adress: null
}
