const fs = require('fs')
const path = require('path')

fs.appendFile(path.join(__dirname, 'test.txt'), 'some text', (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('success')
})

