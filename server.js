const http = require('node:http');

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Istanbul Beauty Broker</title>
  </head>
  <body>
    <h1>Istanbul Beauty Broker</h1>
    <p>Uygulama başarıyla çalışıyor.</p>
  </body>
</html>`);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Istanbul Beauty Broker listening on port ${port}`);
});
