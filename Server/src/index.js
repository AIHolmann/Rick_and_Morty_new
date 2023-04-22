const http = require("http");
const { getCharById } = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/character/")[1];
      getCharById(res, +id);
    }
  })
  .listen(3001, "localhost");
