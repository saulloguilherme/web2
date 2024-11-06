const fs = require('fs')

function readJsonFile(path){
    const data = fs.readFileSync(path , { encoding: 'utf8', flag: 'r' });
    return data
}

function writeJsonFile(json, key, value){
    json[key] = value
    return json
}

module.exports = {
    readJsonFile,
    writeJsonFile
};