const UserEmail = require("../user-email/value-object.js");
const UserPassword = require("../user-password/value-object.js");
const UserName = require("../user-username/value-object.js");

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        Object.freeze(this);
    }

    static create(username, email, password) {
        const emailOrError = UserEmail.create(email);
        if (emailOrError instanceof Error) return emailOrError;

        const nameOrError = UserName.create(username);
        if (nameOrError instanceof Error) return nameOrError;

        const passwordOrError = UserPassword.create(password);
        if (passwordOrError instanceof Error) return passwordOrError;

        return new User(nameOrError, emailOrError, passwordOrError);
    }
}

module.exports = User;
