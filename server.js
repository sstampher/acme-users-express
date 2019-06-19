const express = require('express');
const port = 1337;
const app = express();
const path = require('path');
const fs = require('fs');
const FILE = path.join(__dirname, 'data.json');

const write = (filePath, data) => {
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(data)){
            return reject('data must be an array');
        }
        fs.writeFile(filePath, JSON.stringify(data), (err)=>{
            if(err){
                return reject(err);
            }
            resolve();
        }); 
    });
}

const read = (filePath) => {
    return new Promise ((resolve, reject)=>{
        fs.readFile(filePath, (err, data) => {
            if(err){
                return reject(err);
            }
            let results;
            try {
                results = JSON.parse(data.toString())
            }
        })
    })
}

write(FILE, [{name: 'moe'}, {name: 'larry'}]).then(() => console.log('success')).catch(ex=>console.log(ex));

app.listen(port, ()=>console.log(`listening on port ${port}`))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/api/products', (req, res, next) => res.sendFile(path.join(__dirname, 'data.json')))