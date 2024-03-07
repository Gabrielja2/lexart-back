const InvalidUserNameError = require("./error");

class UserName {
    constructor(name) {
        this.name = name;
        Object.freeze(this);
    }

    get value() {
        return this.name;
    }

    static create(name) {
        if (!this.validate(name)) return new InvalidUserNameError(name);

        return new UserName(name);
    }

    static validate(name) {
        if (name.length > 64 || name.length < 3) return false;

        return true;
    }
}

module.exports = UserName;
