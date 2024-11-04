const taskRoutes =(req, res) =>{
    if(req.method === 'GET'){
        getTasks(req, res);
    }else if(req.method === 'POST'){
        createTasks(req, res);
    }
    else if(req.method === 'PATCH'){
        updateTasks(req, res);
    }
    else if(req.method === 'DELETE'){
        deleteTasks(req, res);
    }
    else{
        res.writeHead(404,'Data Not Found', {'content-type' : 'application/json'})
        res.end(JSON.stringify({
            message: "Unknown Method required."
        }))
    }

}

module.exports =  taskRoutes;