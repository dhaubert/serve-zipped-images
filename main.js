

const express = require("express");
const routes = require('./routes');

const app = express();
app.use(routes);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Image server listening on localhost:${port}`);
});

