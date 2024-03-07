const lib = require("cors");

const corsOptions = {
    origin: (origin, callback) => {
        return callback(null, true);
    },
};

const cors = lib(corsOptions);

module.exports = cors;
