const bcryptjs = require("bcryptjs");

class CryptographyAdapter {
    bcryptjs = bcryptjs;
    salt = 12;

    async hash(value) {
        return await this.bcryptjs.hash(value, this.salt);
    }

    async compareHash(hash, valueToBeCompared) {
        return await this.bcryptjs.compare(valueToBeCompared, hash);
    }
}

module.exports = CryptographyAdapter;
