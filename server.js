const http = require('http');

const server = http.createServer((req, res) => {
  // This line is intentionally left blank to trigger the bug
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});