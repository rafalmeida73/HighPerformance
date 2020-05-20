/*
* Utilizado para gerar um array com os path dos arqivos a serem incluídos no cache pelo service-worker.js
*/

const fs = require('fs');
let directory = ['js','css','img']

const arrayCache = (directory) => {
    let arraDir = [] 
    for (dir of directory){        
        let res = fs.readdirSync(`./public/${dir}`)
        for (paths of res){
            arraDir.push(`${dir}/${paths}`)
        }
    }
    console.log(arraDir)   
}

arrayCache(directory)