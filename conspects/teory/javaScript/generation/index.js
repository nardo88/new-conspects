
function* strGenerator(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const gen = strGenerator(6)

for(let key of gen){
    console.log(key)
}

