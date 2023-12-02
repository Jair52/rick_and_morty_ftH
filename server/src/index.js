const http = require("http");
const port = 3001;
const characters = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    //* /rickandmorty/character/2
    //* ["rick...", "char...", "2"]
    //* "2"
    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop();
        //*characters = [ {id:2}, {..}, {..}]
        const character = characters.find( //trae como objeto
        //const character = characters.filter( trae como array
            char => char.id === Number(id)
        );
        //console.log(character);
        if(character){
           return res
                .writeHead(200, {"Content-Type":"application/json"})
                .end(JSON.stringify(character));
        }else{
           return res
                .writeHead(404, {"Content-Type":"application/json"})
                .end(JSON.stringify({message: "Character Not Found"}));
        }
    }
    return res
        .writeHead(404, {"Content-Type":"application/json"})
        .end(JSON.stringify({message: "Wrong url"}));

}).listen(port,"127.0.0.1", //listen(port,localHost);
    () => (console.log(`Server listening on port ${port}`))
);