const path = require('path');
const fs = require('fs');
const http = require('http');

const port = parseInt(process.env.PORT || '3000', 10);

// Check if Next.js standalone server is available
const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServer)) {
  process.env.PORT = String(port);
  process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';
  require(standaloneServer);
} else {
  const next = require('next');
  const app = next({ dev: false, dir: __dirname });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    http.createServer((req, res) => {
      handle(req, res);
    }).listen(port, '0.0.0.0', () => {
      console.log(`> EPRS production server ready on port ${port}`);
    });
  }).catch((err) => {
    console.error('Failed to start production server:', err);
    process.exit(1);
  });
}
