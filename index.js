const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.static('public'));
app.use('/api', apiRouter);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up and running!');
});
