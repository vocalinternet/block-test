const http = require('http');
const os = require('os');

const hostname = os.hostname();
const author = process.env.AUTHOR || 'Unknown';
const uuid = process.env.UUID || 'Unknown';

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/hostname') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(hostname);
    } else if (req.url === '/author') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(author);
    } else if (req.url === '/id') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(uuid);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
