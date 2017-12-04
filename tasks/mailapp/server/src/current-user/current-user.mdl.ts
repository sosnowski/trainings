import * as express from 'express';
import { createRoute } from '../core/route';
import { generator } from '../core/generator';

export default (router: express.Router) => {
    
    router.get('/', createRoute((req: express.Request, res: express.Response) => {
        const data = generator();
        if (req.session && !req.session.currentUser) {
            req.session.currentUser = data.getUser();
        }
        res.json(req.session && req.session.currentUser);
    }));
};