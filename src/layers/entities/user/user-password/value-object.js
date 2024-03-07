const InvalidUserPasswordError = require("./error");

class UserPassword {
    constructor(userPassword) {
        this.userPassword = userPassword;
        Object.freeze(this);
    }

    get value() {
        return this.userPassword;
    }

    static create(userPassword) {
        if (!this.validate(userPassword))
            return new InvalidUserPasswordError(userPassword);

        return new UserPassword(userPassword);
    }

    static validate(userPassword) {
        const userPasswordRegEx =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/;

        if (!userPasswordRegEx.test(userPassword)) return false;

        if (userPassword.length < 8) return false;

        return true;
    }
}

module.exports = UserPassword;
