const { MissingParamError, InvalidTypeError } = require("../errors");

class Validate {
    static fields(fields, body) {
        const errors = [];
        fields.forEach((element) => {
            const value = body[element.name];

            if (!value && !element.nullable)
                errors.push(new MissingParamError(element.name));
            if (value && element.name !== "price" && typeof value !== "string")
                errors.push(new InvalidTypeError(element.name));

            if (value && element.name === "price" && typeof value !== "number")
                errors.push(new InvalidTypeError(element.name));
        });
        if (errors.length > 0) return errors[0];
    }
}

module.exports = Validate;
