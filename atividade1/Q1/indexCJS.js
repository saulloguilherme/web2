const prompt = require('prompt-sync')()
const operacoes = require('./functionCJS.js')
const { calculateAge } = require('./functionCJS')


ano = Number(prompt('Digite o ano em que vc nasceu: '))
console.log("sua idade é: " + calculateAge(ano))

