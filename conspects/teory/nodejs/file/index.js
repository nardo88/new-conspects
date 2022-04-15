const fs = require('fs')

const path = require('path')


// fs.readdir(__dirname, (err, files) => {
//     if (!err) {
//         // получаем файлы в директории
//         files.forEach(file => {
//             // Получаем у каждого объект класса Stats
//             fs.stat(__dirname+'\\'+file, (error, stat) => {
//                 // Проверяем является ли файл папкой
//                 if (stat.isDirectory()) {
//                     console.log(file + " - it's folder")
//                 } else {
//                     console.log(file + " - it's file")
//                 }
//             })
//         })
//     }
// })

fs.unlinkSync(__dirname +"\\"+ '111.txt')

