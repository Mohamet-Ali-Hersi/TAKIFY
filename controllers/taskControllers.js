const { IncomingForm } = require ('formidable');
const { readTasksFromFile } = require("../utils/fileHandler");
const { copyFileSync} = require ('fs');
const path = require('path');

exports.getTasks =(req, res)=>{
    const tasks = readTasksFromFile();
    res.writeHead(200,{ 'content-type': 'application/json'});
    res.end(JSON.stringify(tasks));
}

exports.createTasks = (req,res)=>{
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'application/json'})
            res.end(JSON.stringify({ 
                message: 'Error parsing form data.'}));
                return;
        }
        const tasks = readTasksFromFile()
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields?.description || '',
            status: fields ?.status || 'pending',
            Image: files.image ? `/uploads/${files.image.name}` : null,
        }
        tasks.push(newTask);
        writeTasksToFile(tasks);

       if (files.image){
        copyFileSync(files.image.path, path.JSON(__dirname, '../uploads', files.Image.name))
        res.end(JSON.stringify(newTask));
       }
       
    });

}

exports.updateTasks = (req, res)=>{
    res.end(JSON.stringify({
        message: 'Update Task endpoint is not implemented.'
    }));
}

exports.deletedTasks = (req, res)=>{
    res.end(JSON.stringify({
        message: 'Delete Task endpoint is not implemented.'
    }));
}