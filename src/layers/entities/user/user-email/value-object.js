const InvalidUserEmailError = require("./error");

class UserEmail {
    constructor(userEmail) {
        this.userEmail = userEmail;
        Object.freeze(this);
    }

    get value() {
        return this.userEmail;
    }

    static create(userEmail) {
        if (!this.validate(userEmail))
            return new InvalidUserEmailError(userEmail);

        return new UserEmail(userEmail);
    }

    static validate(userEmail) {
        if (userEmail.length > 256) return false;

        const userEmailRegEx =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!userEmailRegEx.test(userEmail)) return false;

        const [account, domain] = userEmail.split("@");

        if (account.length > 64 || domain.length > 64) return false;

        return true;
    }
}

module.exports = UserEmail;
