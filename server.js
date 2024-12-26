const { data } = require("./data.js");

const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
</head>
<body>
    <p>${data.title}</p>
    <p>${data.Name}</p>
    <p>${data.Edad}</p>
    <p>${data.Profesion}</p>
    <p>${data.Pregunta}</p>
    </body>
</html>`;
  res.end(html);
});

const PORT = 3000;
server.listen(3000, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
