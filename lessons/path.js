const path = require('path')

console.log('Склеить участок пути', path.join(__dirname, 'first', 'second'))
console.log('.. - вернуться на один уровень вложенности назад', path.join(__dirname, '..'))

console.log('Получить абсолютный путь', path.resolve('first'))

const fullpath = path.resolve('first', 'second.js')
console.log('Парсинг пути', path.parse(fullpath))
console.log('разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))


const siteURL = 'http://localhost:8080/users?id=5123'
const url = new URL(siteURL);
console.log(url)



