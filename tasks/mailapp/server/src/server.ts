import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import { registerModule } from './core/module';

import mailsMdl from './mails/mails.mdl';
import currentUserMdl from './current-user/current-user.mdl';

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: 'ojas jasodjaso sjkjkju asdd'
}));

registerModule(app, mailsMdl, '/api/mails');
registerModule(app, currentUserMdl, '/api/current-user');

app.listen(3000, () => {
    console.log(`App is listening on 3000`);
});