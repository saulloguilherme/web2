import _ from 'lodash'

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20]
var arr = a.sort()

console.log('Array ordem crescente: ' + _.orderBy(arr))
console.log('Array sem numeros duplicados: ' + _.uniq(arr))

//verificar valores pares 
var newArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr = _.concat(newArr, arr[i])
    }
}
console.log('Os valores pares do array são: '+ newArr)
console.log('Dobro dos valores do array: ' + _.map(arr, (n) => n * 2))
console.log('soma total do array: ' + _.sum(arr))

