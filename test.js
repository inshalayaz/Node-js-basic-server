let http = require("http");

let myServer = http.createServer(function(req,res){
    if (req.url == '/'){
    res.end("Hello, welcome to the home page");
    }
    if (req.url == '/about'){
        res.end("Hello, welcome to the about page");
    }
    if (req.url == '/pizza'){
        res.end("Hello, welcome to the pizza page");
    }
    res.end("no address found.")
})
myServer.listen(3000);