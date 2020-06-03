const verifyToken = require("../middlewares/verifyToken");

const routerManager = (app) => {
  app.use(verifyToken);
};

module.exports = routerManager;
