const http = require("node:http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK\n");
    return;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to GitOps web app!\n");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;