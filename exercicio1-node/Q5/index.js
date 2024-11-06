const { readJsonFile, writeJsonFile } = require("./fileManager.js");
var prompt = require('prompt-sync')();

jsonTest = readJsonFile("./test.json")
jsonTest = JSON.parse(jsonTest)
console.log(jsonTest)

console.log("Escreva adicione um novo par de chave/valor nesse JSON.")
var key = prompt("Escreva o nome da chave: ")
var value = prompt("Escreva o valor: ")
jsonTest = writeJsonFile(jsonTest, key, value)

console.log(jsonTest)