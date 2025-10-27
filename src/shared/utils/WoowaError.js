import { ERROR_PREFIX } from "./constants.js";

class WoowaError extends Error {
    constructor(message) {
        super(`${ERROR_PREFIX} ${message}`);
        this.name = 'WoowaError';
    }
}

export { WoowaError };