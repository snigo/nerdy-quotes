const { Router } = require('express');
const model = require('./model');

const apiRouter = Router();

/**
 * Gets random quote from DB
 */
apiRouter.get('/quote', async (_, res) => {
  try {
    const response = await model.getRandom();
    res.status(200);
    res.send(response);
  } catch (err) {
    res.status(500);
  }
});

module.exports = apiRouter;
