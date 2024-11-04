const fs = require('fs');
const path =require('path');

const filepath = './data/tasks.json';


const writeTaskToFile = (tasks)=>{
    fs.writeFileSync(filepath.JSON.stringify(tasks))
}

const readTasksFromFile = ()=>{
    if(fs.existsSync(filepath)){
        writeTaskToFile([])
    }

    const data = fs.readFileSync(filepath);
    return JSON.parse(data);
}