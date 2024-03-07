class InvalidUserEmailError extends Error {
    constructor(email) {
        super();
        this.name = "InvalidUserEmailError";
        this.message = `Esse email (${email}) é inválido`;
    }
}

module.exports = InvalidUserEmailError;
