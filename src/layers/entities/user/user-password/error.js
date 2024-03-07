class InvalidUserPasswordError extends Error {
    constructor(password) {
        super();
        this.name = "InvalidUserPasswordError";
        this.message = `Essa senha ${password} precisa ter 8 caracteres, uma letra maiúscula, uma minúscula e um número`;
    }
}

module.exports = InvalidUserPasswordError;
