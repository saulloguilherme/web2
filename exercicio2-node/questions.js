const fs = require('fs');
var path = require('path');
var prompt = require('prompt-sync')();

// Q1
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

// Q2
async function getData(string) {
    if(string == "cancel") {
        throw new Error("Busca no banco de dados cancelada")
    }

    return fetchDataFromAPI("https://jsonplaceholder.typicode.com/users")
                .then((data)=>console.log(data))
                .catch((erro)=>console.log(erro.message))
}

// Q3
// Promisse que adiciona números aleatórios se o array for menor que 3
function addInArrayRandomNum(array){
    return new Promise((resolve, reject) =>{
        if(array.length >= 3) {
            reject(new Error(`Número não adicionado, array com ${array.length} elementos.`))
        } else {
            const num = Math.random()
            array.push(num)
            resolve(`${num}.`)
        }
    })
}

function runMultiplePromises() {
    var arrNums = []
    Promise.all([addInArrayRandomNum(arrNums), addInArrayRandomNum(arrNums), addInArrayRandomNum(arrNums)]).then((values) => {
        console.log(values);
      });
    console.log(arrNums)
}

// Q4
async function handleErrors() {
    var arrNums = [1, 2, 3]
    try {
        await addInArrayRandomNum(arrNums)
        console.log(arrNums)
    } catch (error) {
        console.log(`Não foi possível adicionar mais números. Aqui estão os elementos do array: ${arrNums}`)
    }
}

// Q5
async function fetchDataFromAPI(url){
    let response = await fetch(url);
    if(response.status !== 200){
        throw new Error("Falha na comunicação com a API")
    }
    return await response.json();
}

// Q9
async function waitOneSecond() {
    console.log('Olá!')
    await new Promise(r => setTimeout(r, 2000));
    console.log('Olá! 1 segundo depois')
}

async function runAllAsynchronousFunction() {
    try {
      await Promise.all([waitOneSecond(), waitOneSecond(), waitOneSecond()])
    } catch (error) {
      console.log(error)
    }
}

// Q10
function readFiles() {
    return new Promise((resolve, reject) =>{
        try {
            fs.readdir("./textos/", (err, files) => {
                if (err)
                  throw new Error("Os arquivos não puderam ser lidos");
                else {
                    console.log(files)
                }
            })
            resolve("Sucesso na promessa")
        } catch (error) {
            reject(new Error("Falha na promessa"))
        }
        
    }) 
}

console.log("Digite o número da questão para rodar. (1 a 10)\n")
questao = Number(prompt(""))

switch (questao) {
    case 1:
        console.log("Questão 1: ")
        delay(5000).then(() => console.log("5 segundos se passaram"))
        console.log("Texto disparado antes no terminal, porém depois no código.")
        break

    case 2:
        console.log("Questão 2: ")
        string = prompt("String proibida = 'cancel'\n")
        getData(string)
        break

    case 3:
        console.log("Questão 3: ")
        runMultiplePromises()
        break

    case 4:
        console.log("Questão 4: ")
        handleErrors()
        break

    case 5:
        console.log("Questão 5: ")
        fetchDataFromAPI("https://jsonplaceholder.typicode.com/users/1")
            .then((data)=>console.log(data))
            .catch((erro)=>console.log(erro.message))
        break

    case 6:
        console.log("Questão 6: ")
        break

    case 7:
        console.log("Questão 7: ")
        break

    case 8:
        console.log("Questão 8: ")
        break

    case 9:
        console.log("Questão 9: ")
        runAllAsynchronousFunction()
        break

    case 10:
        console.log("Questão 10: ")
        readFiles()
        break

    default:
        console.log("Nenhuma questão")
        break

}