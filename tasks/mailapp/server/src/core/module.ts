import * as express from 'express';

interface moduleCallback {
    (router: express.Router): void
}

export const registerModule = (app: express.Application, register: moduleCallback, prefix?: string | RegExp) => {
    const router = express.Router();
    register(router);

    if (prefix) {
        app.use(prefix, router);
    } else {
        app.use(router);
    }
}