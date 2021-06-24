

function add (a: number, b: number): number {
    return a + b
}



function toUpperCase (str: string): string{
    return str.toUpperCase()
}


interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

// если функция не будет принимать никакие аргументы
// то она вернет интерфейс MyPosition
function position() :MyPosition

// если функция будет получать аргументы то функция вернет 
// интерфейс MyPositionWithDefault
function position(a: number): MyPositionWithDefault 

// если функция примет оба аргумента то возращает объект
// который создан на основании интерфейса MyPosition
function position(a: number, b: number): MyPosition

// сама фунция
function position(a? :number, b?: number) {
    // если мы ничего не передали
    if(!a && !b){
        return {x: undefined, y: undefined}
    }
    // если передали только a
    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }
    // остальные случаи (т.е. передали оба аргумента)
    return {x: a, y: b}
}




