import chalk  from 'chalk';
import fs from 'fs'

function extractLinks(text){
    const regex = /\[(.*?)\]\((.*?)\)/g
    const matches = Array.from(text.matchAll(regex))
    return matches.map(match => match[2])
}

function paintTextAndLink(text){
    const regex = /\[(.*?)\]\((.*?)\)/g

    text = text.replace(regex, (match, texto, link) => 
        chalk.red(`${texto} `) + chalk.blue(link)
    );  
    
    console.log(text);

}
 
// const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;

fs.readFile('./texto.md', 'utf8', (err, data) => {
    // Inserir todos os links numa lista
    // var links = extractLinks(data)
    // console.log(links)

    // Colorir links
    paintTextAndLink(data)
});