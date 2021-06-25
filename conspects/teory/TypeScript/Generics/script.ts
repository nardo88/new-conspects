

const arrayOfNumber: Array<number> = [1,1,2,3,5,8,13]
// либо так






 function reverseArray<T> (array: T[]): T[] {
    return array.reverse()
}

function mergeObjects<T extends object>(a: T, b: T) {
    return Object.assign({} , a ,b)
}

const obj = mergeObjects({a: 'Max'}, {b: 32})




function getObjectValue<T extends object , B extends keyof T>(obj: T, key: B){
    return obj[key]
}


