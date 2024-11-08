const http = require('http');

const taskRoutes = require('./routes/taskRoutes');

const HOSTNAME = 'localhost';
const PORT = 9000;

const server = http.createServer((req, res) => {
    if(req.url.startsWith('/tasks')){
        taskRoutes(res,res)
    }else {
        res.writeHead(404, 'Not Found',{ 'content-tpye': 'application/json'})
        res.end(JSON.stringify({
            message: 'Sorry, you got lost!'
        }))
    }

});

server.listen(PORT,HOSTNAME,()=>{
    console.log(`server running on port ${PORT}`);
});