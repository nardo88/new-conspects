

function strip(x: string | number) {
    if (typeof x === 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}


