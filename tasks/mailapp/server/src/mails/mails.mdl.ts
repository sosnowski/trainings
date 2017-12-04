import * as express from 'express';
import { sortBy, reverse } from 'lodash';
import { createRoute } from '../core/route';
import { mails } from './mails';
import { Mail } from '../core/models/mail';


export default (router: express.Router) => {
    const collection = mails();
    collection.autoAdd(10);

    router.get('/', createRoute((req: express.Request, res: express.Response) => {
        // collection.autoAdd();
        res.json(reverse(sortBy(collection.get(), 'created')));
    }));

    router.get('/:id', createRoute((req: express.Request, res: express.Response) => {
        console.log('testtest');
        res.json(collection.getById(+req.params.id));
    }));

    router.post('/', createRoute((req: express.Request, res: express.Response) => {
        if (!req.session || !req.session.currentUser) {
            throw new Error('Missing user session data');
        }
        const msg: Mail = req.body;
        msg.userName = req.session.currentUser.name;
        msg.userAvatar = req.session.currentUser.avatar;
        
        collection.add(msg);
        setTimeout(() => {
            res.json(msg);
        }, 1000);
    }));
};