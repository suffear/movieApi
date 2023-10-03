const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const logEntry = `Request URL: ${parsedUrl.pathname} | Timestamp: ${new Date().toLocaleString()}\n`;
  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) {
      console.error('Error logging request:', err);
    }
  });

  if (parsedUrl.pathname.includes('documentation')) {
    const documentationFilePath = path.join(__dirname, 'documentation.html');
    fs.readFile(documentationFilePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
