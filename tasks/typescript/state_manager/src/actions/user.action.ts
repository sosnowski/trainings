import { Action } from './action';
import { State } from '../state';

class UserLoginAction implements Action {
    
    constructor(private login: string) {}

    public run(oldState: State) {
        if (oldState.userLogin !== this.login) {
            return Object.assign({}, oldState, {
               userLogin: this.login 
            });
        } else {
            return oldState;
        }
    }
}

class UserLogoutAction implements Action {

}

export { UserLoginAction, UserLogoutAction };