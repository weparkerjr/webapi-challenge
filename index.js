require('dotenv').config()

const server = require('./server.js');

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
}); 