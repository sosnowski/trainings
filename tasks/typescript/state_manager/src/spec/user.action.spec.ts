import 'jasmine';
import { UserLoginAction, UserLogoutAction } from '../actions/user.action';
import { State, defaultState } from '../state';

describe('User Actions', () => {

    describe('UserLoginAction', () => {
        let stateWithLogin: State;
        beforeEach(() => {
            stateWithLogin = Object.assign({}, defaultState, {
                userLogin: 'test'
            });
        })
        it('Should not modify the state if the login is not changed', () => {
            let action: UserLoginAction = new UserLoginAction('test');
            let newState = action.run(stateWithLogin);

            expect(newState).toBe(stateWithLogin);
        });

        it('Should return a new state with a new login', () => {
            let action: UserLoginAction = new UserLoginAction('new_login');
            let newState = action.run(defaultState);

            expect(newState).not.toBe(defaultState);
            expect(newState.userLogin).toBe('new_login');
        });
    });

    describe('UserLogoutAction', () => {
        let stateWithLogin: State;
        beforeEach(() => {
            stateWithLogin = Object.assign({}, defaultState, {
                userLogin: 'test'
            });
        })
        it('Should not modify the state if there is no login', () => {
            let action: UserLogoutAction = new UserLogoutAction();
            let newState = action.run(defaultState);

            expect(newState).toBe(defaultState);
        });

        it('Should return a new state without a login', () => {
            let action: UserLogoutAction = new UserLogoutAction();
            let newState = action.run(stateWithLogin);

            expect(newState).not.toBe(stateWithLogin);
            expect(newState.userLogin).toBe(undefined);
        });
    });
});