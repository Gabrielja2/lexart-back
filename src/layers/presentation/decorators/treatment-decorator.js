const { server } = require("../helpers");

class TreatmentDecorator {
    constructor(controller) {
        this.controller = controller;
    }
    async handle(request) {
        try {
            return await this.controller.handle(request);
        } catch (e) {
            return server();
        }
    }
}

module.exports = TreatmentDecorator;
