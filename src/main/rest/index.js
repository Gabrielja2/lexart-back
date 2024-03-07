const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");
const { Router } = express;
const bodyParser = require("./middlewares/body-parse");
const cors = require("./middlewares/cors");

const setupRoutes = (app) => {
    const router = Router();
    app.use("/api", router);
    readdirSync(join(__dirname, "./routes")).map(async (file) => {
        if (!file.endsWith(".map")) await require(`./routes/${file}`)(router);
    });
};

module.exports = setupRest = () => {
    const initExpress = express();
    initExpress.use(bodyParser);
    initExpress.use(cors);
    setupRoutes(initExpress);

    return initExpress;
};
