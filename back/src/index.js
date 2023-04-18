const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/character/")[1];
      const character = data.find((char) => char.id == id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    }
  })
  .listen(3001, "localhost");
